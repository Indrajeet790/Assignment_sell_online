const express = require("express");
const app = express();
const PORT = 8500;

// require database connection file
const dbConnection = require("./config/dbConnection");

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running on port");
  } else {
    console.log(`server running on port ${PORT}`);
  }
});
