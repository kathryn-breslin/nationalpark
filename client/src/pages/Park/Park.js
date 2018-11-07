import React, { Component } from "react";
// import ParkPage from "../../components/ParkPage";
import Map from "../../components/Map";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Row, Col } from "../../components/Grid";
import API from "../../utils/API";

class Park extends Component {
    state = {
        park: {},
        images: []
    }

    componentDidMount() {
        this.handlePark();
    }

    handlePark() {
        API.getPark(this.props.match.params.id)
            .then(res => this.setState({ park: res.data }))
            .catch(err => console.log(err));
        this.getImages();
    }

    // getMap() {
    //     const keyword = this.state.park.name
    //     // const long = this.state.park.latLong.long
    //     console.log(keyword)
    //     API.getMap(keyword)
    //         .then((res) => {
    //             console.log("Location: " + keyword)
    //         })
    // }

    getImages() {
        const search = this.state.park.name;
        console.log("This is what should be searched: " + search)
        const APIKEY = process.env.REACT_APP_FLICKR_API_KEY
        fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + APIKEY + "&tags=" + search + "&per_page=8&format=json&nojsoncallback=1&auth_token=72157700037048532-538f2c9c3fe57043&api_sig=520722b13b6fd4532f9a49557eadcade"
        ).then(function (res) {
            console.log(res);
            return res.json();
        })
            .then(function (res) {
                let imagesArray = res.photos.photo.map((image) => {
                    let imageUrl = "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + ".jpg"
                    return (
                        <img alt="search" src={imageUrl}></img>
                    )
                })
                this.setState({ images: imagesArray })
            }.bind(this))
    }

    render() {
        return (
            <div>
                <Row>
                    <Col size="md-12">
                        <Jumbotron />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Header>
                            {this.state.park.name}
                        </Header>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                    </Col>
                    <Col size="md-8">
                        <h5>
                            {this.state.park.description}
                        </h5>
                        <br></br>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        <Map />
                        <br></br>
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
                <Row>

                    <Col size="md-12">
                        {this.state.images}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12"><p>{this.state.park.directions}</p></Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <button>
                            <Link to="/">Back to Home</Link>
                        </button>
                    </Col>
                    <br></br>
                </Row>
            </div>

        )
    }
}
export default Park;