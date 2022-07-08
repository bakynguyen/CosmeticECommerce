const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("Connected sucessfully");
  } catch (error) {
    console.log("Connecting failed", error);
  }
};

module.exports = { connectDB };
