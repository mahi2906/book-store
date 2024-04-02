const createError = require('http-errors');
const express = require('express');
const routes = require("./routes/index.js");
const path = require('path');
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/", routes(router));

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  if (err.status === 404) {
    res.status(404).send({
      status: 0,
      message: "Not Found!",
      data: null
    });
  } else {
    res.status(500).send({
      status: 0,
      message: "Internal Server Error!",
      data: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});