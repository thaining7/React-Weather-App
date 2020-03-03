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

![App Screenshot](/client/public/assets/images/Screenshot.png)

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
    return axios.get('/api/weather', { params: { q: qv, days: '3' } });
  }

};
```

## Installation

* First, obtain an API key by signing up at https://www.weatherapi.com/
* Clone this repository to your local machine
* Using the command line, cd to the app's directory
* Create a '.env' file and add the following: API_KEY='your-API-key-here'
* Run 'npm install' to install the dependencies
* Run 'npm start' to start the application

* This app requires Node.js and NPM to be installed on your machine. If you do not have them installed, see this guide for detailed installation instructions: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

## API Reference

http://expressjs.com/
https://www.npmjs.com/package/axios
https://www.weatherapi.com/

## How to Use

* Enter a valid zip code or city name in the search box to view the location's current weather conditions and three day forecast
