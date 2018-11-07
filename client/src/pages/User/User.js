import React, { Component } from "react";
// import ReactDom from "react-dom";
// import Popup from "react-popup";
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

    handleLoginInfo = event => {
        event.preventDefault();
        console.log("Signing up...", this.state)
            API.saveUser(this.state).then(function (response) {
                console.log(response)
            })
            this.loadConfirmation();
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // loadConfirmation = () => {
    //     return (
    //         Popup.alert("Thanks for joining," + this.state.username + " !")
    //     )
    // }

    render() {
        return (
            <div>
                <Jumbotron/>
                <div id="popupContainer"></div>
                {/* <Popup/> */}
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <Login
                                inputUser={this.inputUser}
                                inputPassword={this.inputPassword}
                                handleLoginInfo={this.handleLoginInfo}
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