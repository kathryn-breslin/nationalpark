import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import SearchForm from "./SearchForm";
import { Col, Row, Container } from "./Grid";
import API from "../utils/API";
import { ResultItem, ResultList } from "./Results";


class Home extends Component {
    state = {
        results: [],
        searchTerm: ""
    };

    componentDidMount() {
        this.getParkFromDatabase();
    }

    getParkFromDatabase = () => {
        API.getPark()
            .then((res) => {
                this.setState({ renderResults: res.data })
            })
    }

    showResults = () => {
        return this.state.results.map(result => (
            <ResultItem
                _id={result.id}
                key={result.id}
                name={result.fullName}
                description={result.description}
                url={result.url}
                getParkFromDatabase={this.getParkFromDatabase}
            />
        ));
    }

    handleSearch = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleFormSearch = event => {
        event.preventDefault();
        console.log(this.state.searchTerm)
        API.searchParks(this.state.searchTerm)
            .then((res) => {
                this.setState({ results: res.data.data })
                console.log("this.state.results", this.state.results)
            })
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <SearchForm
                            handleSearch={this.handleSearch}
                            handleFormSearch={this.handleFormSearch}
                            showResults={this.showResults}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <ResultList>
                                {this.showResults()}
                            </ResultList>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Home;