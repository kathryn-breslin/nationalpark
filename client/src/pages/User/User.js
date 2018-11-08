import React, { Component } from "react";
import Login from "../../components/Login";
// import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";

class User extends Component {
    state = {
        username: "",
        password: ""
    }

    inputUser = event => {
        this.setState({ username: event.target.value })
        console.log("this.state.username", this.state.username)
    }

    inputPassword = event => {
        this.setState({ password: event.target.value })
        console.log("this.state.password", this.state.password)
    }

    handleLoginInfo = event => {
        event.preventDefault();
        console.log("Signing up...", this.state)
        API.saveUser(this.state).then(function(response) {
            console.log(response)
            // if (response === true) {
            //     response.redirect("/profile")
            // }
            // else {
            //     alert("Your username and password are incorrect! Please try again")
            // }
        })
    }
    render() {
        return (
            <div>
                <Jumbotron />
                <div id="popupContainer"></div>
                {/* <Popup/> */}
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <Login
                                inputUser={this.inputUser}
                                inputPassword={this.inputPassword}
                                handleLoginInfo={this.handleLoginInfo}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default User;