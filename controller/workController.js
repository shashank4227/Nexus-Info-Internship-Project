const express = require("express");
const WorkForm = require("../model/work.js");

const router = express.Router();

router.post("/work_form", (req, res) => {
  const { name, email, phone, message } = req.body;

  const newWorkFormData = new WorkForm({
    name,
    email,
    phone,
    message,
  });

  newWorkFormData
    .save()
    .then(() => res.render("work", { success: true }))
    .catch((err) => {
      console.error(err.message);
      res.status(400).send("Error saving form data");
    });
});

module.exports = router;
