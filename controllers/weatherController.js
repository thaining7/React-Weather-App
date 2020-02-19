require('dotenv').config();
const axios = require("axios");

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios.get("http://api.weatherapi.com/v1/forecast.json?key=ba2ed03044634848bb2150838201402", { params })
            .then((results) => {
                const data = [ results.data ];
                res.json(data);
                // res data had to be nested in array!!!
                console.log(data);
            })
            .catch(err => console.log("It's throwing this error: " + err))
            .catch(err => res.status(422).json(err));
    }
};