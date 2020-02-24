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
        console.log(data);
      })
      .catch(err => console.log(err));
  }
};
