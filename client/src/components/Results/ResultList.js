import React from "react";
import { Container } from "../Grid";

export const ResultList = props => (
    <Container>
        <div>
             <div>Top Results</div>
             <ul className="list-group">{props.children}</ul>
        </div>
    </Container>
);