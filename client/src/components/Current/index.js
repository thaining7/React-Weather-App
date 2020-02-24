import React from 'react';
import { ListItem } from '../List';
import { Row, Col } from '../Grid';
// import "./style.css";

function Current ({ locationName, locationRegion, locationCountry, currentTemp, humidity, uvIndex, condition, icon }) {
  return (
    <ListItem>
      <Row className='flex-wrap-reverse'>
        <Col size='md-8'>
          <h3 className='font-italic'>Current Weather Conditions for {locationName}, {locationRegion}, {locationCountry}</h3>
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
            <li>Temperature: {currentTemp} degrees F</li>
            <li>Humidity: {humidity}</li>
            <li>UV Index: {uvIndex}</li>
          </ul>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Current;
