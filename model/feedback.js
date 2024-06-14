// models/formData.js
const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Feedback", FormDataSchema);
