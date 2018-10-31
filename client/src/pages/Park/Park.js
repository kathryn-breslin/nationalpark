import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";

class Park extends Component {
    state = {
        park: {}
    }

    // componentDidMount() {
    //     API.getPark(this.props.match.params.id)
    //         .then(res => this.setState({ park: res.data }))
    //         .catch(err => console.log(err));
    // }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            {this.state.park.name}
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-12">
                        <h1>Info About This Park</h1>
                        <p>{this.state.park.description}</p>
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