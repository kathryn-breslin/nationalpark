import React from "react";
import { Container, Row, Col } from "../Grid";

export const ResultItem = props => (
    <li className="list-group-item" id="item">
        <Container>
            <Row>
                <Col size="md-12">
                <h3>{props.name}</h3>
                <h4>{props.description}</h4>
                </Col>
            </Row>
        </Container>
    </li>
)