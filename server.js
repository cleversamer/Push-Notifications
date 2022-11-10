require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/notificaions.route");

app.use(express.json());
app.use("/api", routes);

const port = process.env["PORT"] || 4000;
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
