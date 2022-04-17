const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(
      process.env.mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
  } catch (e) {
    console.log("could not connect", e);
  }
};
module.exports = connectDb;
