import http from "http";
import app from "app"; // the actual Express application
import config from "config";

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Node_ENV: ${config.nodeEnv}`);
  console.log(`Server running on port ${config.port}`);
});
