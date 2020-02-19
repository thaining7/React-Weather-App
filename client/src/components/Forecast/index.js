import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
// import "./style.css";

function Forecast({ location, temp}) {
    return (
        <ListItem>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    <h3 className="font-italic">Weather Forecast for {location}</h3>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <h4>Conditions</h4>
                    <ul>
                        <li className="font-italic small">Temperature: {temp} degrees F</li>
                        {/* <li className="font-italic small">Low Temperature: {low} degrees F</li> */}
                    </ul>
                </Col>
            </Row>
            {/* <Row>
                <Col size="md-6">
                    <h4>3 Day Forecast</h4>
                    <ul>
                        <li className="font-italic small">Date: {forecast.forecastday[0].date}</li>
                        <li className="font-italic small">Low Temp: {forecast.forecastday[0].day.mintemp_c} degrees Celcius</li>
                        <li className="font-italic small">High Temp: {forecast.forecastday[0].day.maxtemp_c} degrees Celcius</li>
                    </ul>
                    <ul>
                        <li className="font-italic small">Date: {forecast.forecastday[1].date}</li>
                        <li className="font-italic small">Low Temp: {forecast.forecastday[1].day.mintemp_c} degrees Celcius</li>
                        <li className="font-italic small">High Temp: {forecast.forecastday[1].day.maxtemp_c} degrees Celcius</li>
                    </ul>
                    <ul>
                        <li className="font-italic small">Date: {forecast.forecastday[1].date}</li>
                        <li className="font-italic small">Low Temp: {forecast.forecastday[1].day.mintemp_c} degrees Celcius</li>
                        <li className="font-italic small">High Temp: {forecast.forecastday[1].day.maxtemp_c} degrees Celcius</li>
                    </ul>
                </Col>
            </Row> */}
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