// Load dotenv only in non-production environments
if (process.env.NODE_ENV !== "production") {
  // Dynamically import dotenv to avoid bundling it in production builds
  const dotenv = require("dotenv");
  dotenv.config();
}

interface Config {
  port: number;
  nodeEnv: string;
  apiPref: string;
  apiVersion: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  apiPref: process.env.API_PREF || "api",
  apiVersion: process.env.API_VERSION || "v1",
};

export default config;
