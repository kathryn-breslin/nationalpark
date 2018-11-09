import React from "react";
import "./FavoritesContainer.css";

import { Container } from "../Grid";

export const FavoritesContainer = (props) => (
    <Container>
        <div id="container">
            <h4 id="yourFavs">Your Favorites</h4>
            <div>
                {props.children}
            </div>
        </div>
    </Container>
);