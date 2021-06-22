const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dbConfig = require("./database/db");

// Setting up port with express js
const thesisRoute = require("../server/routes/thesis.route")

// Connecting with mongodb database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Database sucessfully connected");
    },
    (error) => {
      console.log("Database could not be connected: " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.use(morgan("dev"));

// Setting up static directory
app.use(express.static(path.join(__dirname, "dist/angular-app")));
app.use("/", express.static(path.join(__dirname, "dist/angular-app")));

// RESTful API root
app.use("/api", thesisRoute);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/angular-app/index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
