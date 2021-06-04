
// DEPENDENCIES
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// const mongojs = require("mongojs");
// const db = mongojs("mongodb://localhost/workout", ["workoutdb"]);



// PORT
const PORT = process.env.PORT || 4000;


// MIDDLEWARE
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// CONNECT TO MONGO DB W/MONGOOSE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useFindAndModify: false
});


// ROUTES
app.use(require("./routes/routes_api.js"));
app.use(require("./routes/routes_html.js"));


// START SERVER
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
});