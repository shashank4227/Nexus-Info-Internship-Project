const mongoose = require("mongoose");

const WorkFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Work", WorkFormSchema);
