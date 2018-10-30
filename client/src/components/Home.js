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
        this.searchParks();
    }

    searchParks = () => {
        API.searchParks()
            .then((res) => {
                this.setState({ renderResults: res.data })
            })
    }

    renderResults = () => {
        return this.state.results.map(result => (
            <ResultItem
                name={result.designation}
                description={result.description}
            />
        ))
    }

    handleSearch = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleFormSearch = event => {
        event.preventDefault();
        console.log(this.state.searchTerm)
        API.searchParks(this.state.searchTerm)
            .then((res) => {
                this.setState({ results: res.data })
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
                            renderResults={this.renderResults}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <ResultList>
                                {this.renderResults()}
                            </ResultList>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Home;