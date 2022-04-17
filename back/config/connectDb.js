const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.connect(
    process.env.mongoAtlasUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.log(err);
      else console.log(" Mongoose is connected");
    }
  );
};
module.exports = connectDb;
