require('dotenv').config();
const axios = require('axios');

module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;
    axios({
      method: 'get',
      url: 'http://api.weatherapi.com/v1/forecast.json?key=' + process.env.API_KEY,
      params
    })
      .then(results => {
        const data = [results.data];
        res.json(data);
        // console.log(results)
        console.log(data);
      })
      // changed error handling on this catch to allow react to render correct state
      .catch(error => {
        const errData = error.response.status;
        res.send(errData);
        console.log(errData);
      }) // log error.response.status for security
    }
};
