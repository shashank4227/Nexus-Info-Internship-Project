const mongoose = require("mongoose");

// MongoDB connection URI
const mongoURI = "mongodb+srv://shashank4227:shashank4227@nexus.2ppgsnu.mongodb.net/?retryWrites=true&w=majority&appName=nexus";

// Function to connect to MongoDB
const connectToMongo = async () => {
  try {
    console.log("Initiating connection!");
    // Establish connection to MongoDB
    await mongoose.connect(mongoURI);
    console.log(`Connected to ${mongoURI}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
