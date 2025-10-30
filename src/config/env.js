import "./load.env.js";

const envs = {
  PORT: process.env.PORT,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
};

export default envs;
