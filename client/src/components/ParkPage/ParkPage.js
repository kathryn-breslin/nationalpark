import React from "react";
import { Row, Col } from "../Grid";


export const ParkPage = props => (
    <Row>
        <Col size="md-12" key={props.id} id={props.id}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </Col>
    </Row>
)

export default ParkPage;