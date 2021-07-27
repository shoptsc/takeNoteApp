require("dotenv").config();
const express = require("express");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/noteRoute");
const colors = require("colors");
const morgan = require("morgan");
const { urlencoded } = require("express");
const port = process.env.PORT || 5000;
const { connectDB } = require("./config/db");

connectDB();


const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: true }));



app.use("/api/users", userRoute);
app.use("/api/notes", noteRoute);


if (connectDB) {
    app.listen(port, console.log(`server running on port ${port}`.cyan))
}