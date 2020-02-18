import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Forecast from "../components/Forecast";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    weatherData: [],
    q: "",
    message: "Enter a zip code"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getWeather = () => {
    API.getWeather(this.state.q)
      .then(res =>
        this.setState({
          weatherData: res.data
        })
      )
      // .then(console.log("weatherData: " + weatherData))
      .catch(() =>
        this.setState({
          weatherData: [],
          message: "No Forecast Found, Try a Different Location"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getWeather();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
                <h1 className="text-center">
                  <strong>React Weather App</strong>
                </h1>
                <h2 className="text-center">Find the weather forecast for any location</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Forecast Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.weatherData.length ? (
                <List>
                  {this.state.weatherData.map(weather => (
                    <Forecast
                      
                      locationName={weather.location.name}
                      locationRegion={weather.location.region}
                      locationCountry={weather.location.country}
                      currentTemp={weather.current.temp_f}
                      currentCond={weather.current.condition.text}
                      
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;