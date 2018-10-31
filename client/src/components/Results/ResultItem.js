import React from "react";
import "./ResultItem.css";
import { Container, Row, Col } from "../Grid";

export const ResultItem = props => (
    <li className="list-group-item" id="item">
        <Container>
            <Row>
                <Col size="md-12" key={props.id} id={props.id}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <br></br>
                <a rel="noreferrer noopener" target="_blank" href={props.url}>Read More</a>
                <a href={"/parks" + props._id}>More Info About Park</a>
                </Col>
            </Row>
        </Container>
    </li>
)