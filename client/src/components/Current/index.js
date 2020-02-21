import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";

function Current({ locationName, locationRegion, locationCountry, currentTemp, humidity, uvIndex, condition}) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
    <h3 className="font-italic">Current Weather Conditions for {locationName}, {locationRegion}, {locationCountry}</h3>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <h4>Conditions</h4>
                    <ul>
                        <li className="font-italic small">Current Temperature: {currentTemp} degrees F</li>
                        <li className="font-italic small">Conditions: {condition}</li>
                        <li className="font-italic small">Humidity: {humidity} degrees F</li>
                        <li className="font-italic small">UV Index: {uvIndex} degrees F</li>
                    </ul>
                </Col>
            </Row>
            
            {/* <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
                </Col>
                <Col size="12 sm-8 md-10">
                    <p>{description}</p>
                </Col>
            </Row> */}
        </ListItem>
    );
}

export default Current;