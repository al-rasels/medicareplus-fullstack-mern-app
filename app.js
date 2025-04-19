const express = require("express");

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./src/routes/route");

const app = new express();

const {
  WEB_CACHE,
  DBOption,
  DB_URL,
  URL_ENCODED_LIMIT,
  RATE_LIMIT,
  JSON_LIMIT,
} = require("./src/configs/config");
mongoose
  .connect(DB_URL, DBOption)
  .then((res) => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser());
app.use(cors());

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);

app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.json(JSON_LIMIT));
app.use(express.urlencoded(URL_ENCODED_LIMIT));

const limiter = rateLimit(RATE_LIMIT);
app.use(limiter);

app.set("etag", WEB_CACHE);
app.use("/api/v1", router);

// Scaffolding with client-side
app.use(express.static(path.join(__dirname, "/client/dist")));

// Add React Front End Routing
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

module.exports = app;
