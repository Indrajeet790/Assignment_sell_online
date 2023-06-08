const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sellers_DB").then(() => {
  console.log("database successfully connected");
});
