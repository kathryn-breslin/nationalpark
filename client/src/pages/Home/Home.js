import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SearchForm from "../../components/SearchForm";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { ResultItem, ResultList } from "../../components/Results";
// import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
    state = {
        parks: [],
        searchTerm: ""
    };

    componentDidMount() {
        this.getParkFromDatabase();
    }

    getParkFromDatabase = () => {
        API.getParks()
            .then((res) => {
                this.setState({ renderResults: res.data })
            })
    }

    showResults = () => {
        return this.state.parks.map(result => (
            <ResultItem
                _id={result.id}
                key={result.id}
                name={result.fullName}
                description={result.description}
                url={result.url}
                getParkFromDatabase={this.getParkFromDatabase}>
            </ResultItem>
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
                this.setState({ parks: res.data.data })
                console.log("this.state.parks", this.state.parks)
            })
    }

    render() {
        return (
            <div>
                <Jumbotron><h1 id="homeText">National Park Search</h1></Jumbotron>
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