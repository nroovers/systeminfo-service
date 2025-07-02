import express from "express";
import cors from "cors";
import config from "config";
import infoRouter from "routes/infoRoutes";
import transformResponseBody from "middleware/transformResponseBody";
import unknownEndpoint from "middleware/unknownEndpoint";
import errorHandler from "middleware/errorHandler";
import logger from "middleware/logger";

const app = express();

// parses incoming requests with JSON payloads and is based on body-parser.
// app.use(express.json())

const path = `/${config.apiPref}/${config.apiVersion}`;

app.use(cors()); // --> middleware to support CORS
app.use(logger);
app.use(transformResponseBody);

app.use(path + "/info", infoRouter);

app.get("/", function (req, res) {
  res.send("<h2>OK</h2><p>System info service up and running.<p>");
});

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
