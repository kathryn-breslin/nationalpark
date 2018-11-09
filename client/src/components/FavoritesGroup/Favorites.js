import React from "react";
import { Container, Row, Col } from "../Grid";

export const Favorites = (props) => (
    <Container fluid>
        <Row>
            <Col size="md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" key={props.id} id={props.id}>[Passing props.name here]</h5>
                        <p className="card-text">[Passing props.description here]</p>
                        <a href="#" class="btn btn-primary">[Go to page description]</a>
                    </div>
                </div>
            </Col>
            <Col size="md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" key={props.id} id={props.id}>[Passing props.name here]</h5>
                        <p className="card-text">[Passing props.description here]</p>
                        <a href="#" class="btn btn-primary">[Go to page description]</a>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
);