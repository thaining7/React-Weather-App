import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";

function Forecast({ date, lowTemp, highTemp, condition }) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
    <h3 className="font-italic">Forecast for {date}</h3>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <ul>
                        <li className="font-italic small">Conditions: {condition}</li>
                        <li className="font-italic small">High Temperature: {highTemp} degrees F</li>
                        <li className="font-italic small">Low Temperature: {lowTemp} degrees F</li>
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

export default Forecast;