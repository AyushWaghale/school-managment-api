const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", schoolRoutes);

module.exports = app;
