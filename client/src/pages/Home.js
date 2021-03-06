import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Current from "../components/Current";
import Forecast from "../components/Forecast";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    weatherData: [],
    query: "",
    message: "Enter a zip code or city"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getWeather = () => {
    API.getWeather(this.state.query)
      .then(res =>
        this.setState({
          weatherData: res.data,
          message: "Success!"
        })
      )
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
              <h2 className="text-center">Find the weather for any location</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Forecast Search" icon="fas fa-rainbow">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                query={this.state.query}
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

                    <Current
                      key={weather.location.name}
                      locationName={weather.location.name}
                      locationRegion={weather.location.region}
                      locationCountry={weather.location.country}
                      currentTemp={weather.current.temp_f}
                      humidity={weather.current.humidity}
                      uvIndex={weather.current.uv}
                      condition={weather.current.condition.text}
                      icon={weather.current.condition.icon}
                    />

                  ))}
                  {this.state.weatherData[0].forecast.forecastday.map(forecast => (
                    <Forecast
                      key={forecast.date}
                      date={forecast.date}
                      lowTemp={forecast.day.mintemp_f}
                      highTemp={forecast.day.maxtemp_f}
                      uvIndex={forecast.day.uv}
                      humidity={forecast.day.avghumidity}
                      sunrise={forecast.astro.sunrise}
                      sunset={forecast.astro.sunset}
                      condition={forecast.day.condition.text}
                      icon={forecast.day.condition.icon}
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