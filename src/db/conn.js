const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/digiflux", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log("not connected");
  });
