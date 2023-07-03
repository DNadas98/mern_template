const path = require("path");
const fs = require("fs");
require("dotenv").config({ path: path.join(__dirname, "config/config.env") });
const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("./config/dbConnection");
const helmet = require("helmet");
const helmetConfig = require("./config/helmetConfig");
const rateLimiter = require("./middleware/rateLimiter");
const banHandler = require("./middleware/banHandler");
const cors = require("cors");
const corsConfig = require("./config/corsConfig");
const { logRequest, logServed, logError } = require("./middleware/logger");
const documentsRouter = require("./routes/api/documentsRouter");

const server = express();

//Security middleware
server.use(helmet(helmetConfig));
server.use(rateLimiter);
server.use(banHandler);

//CORS - !origin ONLY for developement
server.use(cors(corsConfig));

//Built-in middleware to handle form data, JSON and static files
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//Request logger middleware
server.use(logRequest);

//Routing

server.use("/api/documents", documentsRouter);

//test server error route
// eslint-disable-next-line no-unused-vars
server.get("/error", (req, res, next) => {
  throw new Error("");
});

//serve build
server.use("/static", express.static(path.join(__dirname, "../client/build/static")));
server.get("/*", (req, res, next) => {
  try {
    if (fs.existsSync(path.join(__dirname, "../client/build/index.html"))) {
      res.status(200);
      logServed(req, res);
      return res.sendFile(path.join(__dirname, "../client/build/index.html"));
    }
    return next();
  } catch (err) {
    return next(err);
  }
});

//404 - Not Found
server.use((req, res, next) => {
  try {
    if (req.accepts("application/json")) {
      res.status(404);
      logServed(req, res);
      return res.json({ message: "Not Found" });
    }
    res.status(404);
    logServed(req, res);
    return res.send("Not Found");
  } catch (err) {
    logError(err, req);
    return next(err);
  }
});

//500 - Internal Server Error
// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  if (req.accepts("application/json")) {
    res.status(500);
    logError(err, req);
    return res.json({ message: "Internal Server Error" });
  }
  res.status(500);
  logError(err, req);
  return res.send("Internal Server Error");
});

//Connect to db, start server
async function start() {
  try {
    await dbConnection();
    console.log("Connected to database");
    server.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}
start();

//handle DB connection errors
mongoose.connection.on("error", (err) => {
  logError(err);
});
