const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://balaganesh102004:ALQP@weQ*12@cluster0.nsgbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to mongodb");
  });
