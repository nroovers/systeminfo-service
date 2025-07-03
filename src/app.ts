import express from "express";
import path from "path";
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

const apiUrl = `/${config.apiPref}/${config.apiVersion}`;

app.use(cors());
app.use(logger);
app.use(transformResponseBody);

app.use(apiUrl + "/info", infoRouter);

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "assets/html", "index.html"));
});

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
