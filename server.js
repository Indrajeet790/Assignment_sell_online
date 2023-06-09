const express = require("express");
const app = express();
const PORT = 7500;

// require database connection file
const dbConnection = require("./config/dbConnection");

// use middleware for parsing data from body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require routes
app.use("/", require("./routes/index.js"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running on port");
  } else {
    console.log(`server running on port ${PORT}`);
  }
});
