import "./load.env.js";

const envs = {
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_SERVICE: process.env.EMAIL_SERVICE,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
};

export default envs;
