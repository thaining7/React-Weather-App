import axios from "axios";

export default {
    // Gets data from the Weather API
    getWeather: function (qv) {
        return axios.get("/api/weather", { params: { q: + qv }, days: "3" });
    }
    
};