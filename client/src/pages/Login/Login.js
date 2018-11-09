import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from "../../components/Grid";
import Header from "../../components/Header";
import { FavoritesContainer, Favorites } from "../../components/FavoritesGroup"
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
                            <Header>
                                Welcome [USERNAME HERE]
                            </Header>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <FavoritesContainer>
                                <Favorites/>
                            </FavoritesContainer>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;