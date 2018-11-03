import React, { Component } from "react";
// import ParkPage from "../../components/ParkPage";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";

class Park extends Component {
    state = {
        park: {}
    }

    componentDidMount() {
        this.handlePark();
    }

    handlePark() {
        API.getPark(this.props.match.params.id)
            .then(res => this.setState({ park: res.data }))
            .catch(err => console.log(err));  
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>{this.state.park.name}</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {this.state.park.description}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Link to="/">Back to Home</Link>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default Park;