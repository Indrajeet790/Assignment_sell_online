const express = require("express");
const app = express();
const PORT = 8500;

app.listen(PORT, (err) => {
  if (err) {
    console.log("server is not running on port");
  } else {
    console.log(`server running on port ${PORT}`);
  }
});
