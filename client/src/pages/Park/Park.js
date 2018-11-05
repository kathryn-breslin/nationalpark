import React, { Component } from "react";
// import ParkPage from "../../components/ParkPage";
import Map from "../../components/Map";
import Images from "../../components/Images";
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

        // API.getImages(this.state.search)
        //     .then((res) => {
        //         this.setState({ images: res.data })
        //         console.log("this.state.images: ", this.state.images)
        //     })
    }

    render() {
        return (
        <div>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>{this.state.park.name}</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2"></Col>
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
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        <Images />
                    </Col>
                    <Col size="md-2"></Col>
                </Row>
                <Row>
                    <Col size="md-12"><p>{this.state.park.directions}</p></Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <button>                    
                            <Link to="/">Back to Home</Link>
                        </button>
                        {/* <Link to="/">Back to Home</Link> */}
                    </Col>
                    <br></br>
                </Row>
            </div>

        )
    }
}
export default Park;