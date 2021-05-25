require("dotenv").config();
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const port = process.env.PORT || 5000;


const app = express();
app.use(morgan("dev"))


app.listen(port, console.log(`server running on port ${port}`.cyan))

