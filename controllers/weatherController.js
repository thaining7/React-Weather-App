require('dotenv').config();
const axios = require("axios");

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        // axios.get("http://api.weatherapi.com/v1/forecast.json", { params })
        //     .then((results) => {
        //         const data = [ results.data ];
        //         res.json(data);
        //         // res data had to be nested in object!!!
        //         console.log(data);
        //     })
        //     .catch(err => console.log("It's throwing this error: " + err))
        //     .catch(err => res.status(422).json(err));
        axios({
            method: "get",
            url: "http://api.weatherapi.com/v1/forecast.json?key=" + process.env.API_KEY,
            params
        })
        .then(results => {
            const data = [ results.data ];
            res.json(data);
            console.log(data);
        })
        .catch(err => console.log(err));
    }
};