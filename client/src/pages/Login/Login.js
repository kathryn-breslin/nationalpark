import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";

class Login extends Component {
    state = {
        user: {}
    }
    componentDidMount() {
        this.handleUserInfo();
    }

    handleUserInfo() {
        API.getUser(this.props.match.params.id)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log(err));
    }
    

    render () {
        return (
            <div>
                <Jumbotron/>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <h1>{this.state.username}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;