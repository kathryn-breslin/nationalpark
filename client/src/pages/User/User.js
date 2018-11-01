import React, { Component } from "react";
import Login from "../../components/Login";
// import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
// import API from "../../utils/API";

class User extends Component {
    state = {
        username: "",
        password: ""
    }

    inputUser = event => {
        this.setState({ username: event.target.value })
        console.log("this.state.username", event.target.value)
    }

    inputPassword = event => {
        this.setState({ password: event.target.value })
        console.log("this.state.password", event.target.value)

    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Join the NP Club!</h1>
                </Jumbotron>

                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <Login
                                inputUser={this.inputUser}
                                inputPassword={this.inputPassword}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default User;