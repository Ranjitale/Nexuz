const run = require("./db");
const express = require("express");
const authRouter = require("./routes/auth");

const app = express();
const port = 3001;

app.use(express.json());

app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
