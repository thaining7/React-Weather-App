import React from 'react';
import { ListItem } from '../List';
import { Row, Col } from '../Grid';
// import "./style.css";

function Forecast ({ date, lowTemp, highTemp, uvIndex, humidity, sunrise, sunset, condition, icon }) {
  return (
    <ListItem>
      <Row className='flex-wrap-reverse'>
        <Col size='md-8'>
          <h3 className='font-italic'>Forecast for {date}</h3>
        </Col>
      </Row>
      <Row>
        <Col size='md-12'>
          <img className='img-thumbnail img-fluid mb-3' src={icon} alt='conditions' />
        </Col>
      </Row>
      <Row>
        <Col size='md-6'>
          <ul>
            <li>Conditions: {condition}</li>
            <li>High Temperature: {highTemp} degrees F</li>
            <li>Low Temperature: {lowTemp} degrees F</li>
            <li>Humidity: {humidity}</li>
            <li>UV Index: {uvIndex}</li>
            <li>Sunrise: {sunrise}</li>
            <li>Sunset: {sunset}</li>
          </ul>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Forecast;
