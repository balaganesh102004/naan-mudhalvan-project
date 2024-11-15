const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://cluster0.nsgbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to mongodb");
  });
