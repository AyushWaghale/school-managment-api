const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// API routes
app.use("/api", schoolRoutes);

module.exports = app;
