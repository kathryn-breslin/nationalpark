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
        searchTerm: "",
    };

    // componentDidMount() {
    //     this.loadParks();
    // }

    // loadParks = () => {
    //     API.getParks()
    //         .then(res =>
    //             this.setState({ parks: res.data })
    //         )
    //         .catch(err => console.log(err));
    // }

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
                this.saveParks(this.state.parks);
            })
    }

    saveParks = parksArray => {
        console.log("Save me", parksArray);
        for(let i = 0; i < parksArray.length; i++){
            API.savePark(parksArray[i])
            // API.savePark({ $push: { park: parksArray[i]}});
        }
    }

    // handleClearPage = event => {
    //     event.preventDefault();
    //     console.log("Clearing page..");
    //     API.deleteParks({})
    // }

    showResults = () => {
        return this.state.parks.map(park => (
            <ResultList>
                <ResultItem
                    id={park._id} 
                    key={park._id}
                    name={park.name}
                    description={park.description}
                    url={park.url}  
                    // weather={park.weather}
                    // directions={park.directions}
                    // latLong={park.latLong}                                  
                >
                </ResultItem>
            </ResultList>
        ));
    }

    render() {
        return (
            <div>
                <Jumbotron></Jumbotron>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <SearchForm
                                handleSearch={this.handleSearch}
                                handleFormSearch={this.handleFormSearch}
                                showResults={this.showResults}
                                handleClearPage={this.handleClearPage}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {this.showResults()}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Home;
