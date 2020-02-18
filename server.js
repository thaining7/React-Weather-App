const express = require('express');
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes
app.use(routes);

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});