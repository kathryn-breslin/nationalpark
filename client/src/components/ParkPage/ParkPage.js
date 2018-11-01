import React from "react";
import { Container, Row, Col } from "../Grid";


export const ParkPage = props => (
    <div>
        <Container>
            <Row>
                <Col size="md-12" key={props.id} id={props.id}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <br></br>
                </Col>
            </Row>
        </Container>
    </div>
)

export default ParkPage;