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
                <a href={"/park/" + props.id} onClick={props.handlePark}>More Info About {props.name}</a>
                <br></br>
                <a rel="noreferrer noopener" target="_blank" href={props.url}>Offical Website</a>
                </Col>
            </Row>
        </Container>
    </li>
)