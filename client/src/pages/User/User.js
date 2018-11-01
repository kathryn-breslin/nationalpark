import React, { Component } from "react";
// import ReactDom from "react-dom";
import Popup from "react-popup";
import Login from "../../components/Login";
// import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import USER from "../../utils/USER";

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

    handleLoginInfo = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);
        if(this.state.username && this.state.password) {
            USER.saveUser({
                username: this.state.username,
                password: this.state.password
            })
            .then(res => this.loadConfirmation())
            .catch(err => console.log(err));
        }
    }

    loadConfirmation = () => {
        return (
            Popup.alert("Thanks for joining," + this.state.username + " !")
        )
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
                                loadConfirmation={this.loadConfirmation}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default User;