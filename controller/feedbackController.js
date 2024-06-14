const express = require("express");
const FormData = require("../model/feedback");

const router = express.Router();

router.post("/submit_form", (req, res) => {
  const { name, email, phone, message } = req.body;

  const newFormData = new FormData({
    name,
    email,
    phone,
    message,
  });

  newFormData
    .save()
    .then(() => res.render("index", { success: true }))
    .catch((err) => res.status(400).send("Error saving form data"));
});

module.exports = router;
