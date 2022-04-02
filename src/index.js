const express = require("express");
const env = require("dotenv");

const { healthRouter } = require("./routes/health.router");

env.config();

const port = process.env.PORT || 3001;
const app = express();

app.use("/health", healthRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
