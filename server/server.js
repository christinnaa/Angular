const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dbConfig = require("./database/db");

const thesisRoute = require("../server/routes/thesis.route")

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Database successfully connected");
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

app.use(express.static(path.join(__dirname, "dist/angular-app")));
app.use("/", express.static(path.join(__dirname, "dist/angular-app")));

app.use("/api", thesisRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/angular-app/index.html"));
});

app.use(function (err, req, res, next) {
  console.error(err.message); 
  if (!err.statusCode) err.statusCode = 500; 
  res.status(err.statusCode).send(err.message); 
});
