require('dotenv').config();
const axios = require("axios");

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios.get("http://api.weatherapi.com/v1/forecast.json", { params })
            .then((results) => {
                res.send(results.data);
                console.log(results.data);
            })
            .catch(err => console.log("It's throwing this error: " + err))
            .catch(err => res.status(422).json(err));
    }
};