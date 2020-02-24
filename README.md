## React-Weather-App

A weather forcast app build with Node, Express and React

https://node-express-react-weather.herokuapp.com/

## Description

This app displays the current weather conditions and three day forecast for a location of your choice

## Build Status

[![Build Status](https://travis-ci.com/thaining7/React-Weather-App.svg?branch=master)](https://travis-ci.com/thaining7/React-Weather-App)

## Code Style

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)

## Screenshot

![App Screenshot](/client/public/assets/images.Screenshot.png)

## Tech Used

* Node
* Express
* React
* JavaScript
* Axios
* Weather API

## Code Example

Exporting the API module to be used on our React Home page. "qv" is the query value taken in from the search component while "q" is the query parameter required by the API. "params" is the Axios config property required to define the query parameters.

```
...
export default {
  // Gets data from the Weather API via the server route
  getWeather: function (qv) {
    return axios.get('/api/weather', { params: { q: + qv, days: '3' } });
  }

};
```

## API Reference

https://www.weatherapi.com/

## How to Use

* Enter a zip code in the search box to view the location's current weather conditions and three day forecast
