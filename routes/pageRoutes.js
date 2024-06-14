const express = require("express");
const router = express.Router();

const renderPage = (route, file, props) => {
  router.get(route, async (req, res) => {
    try {
      const userData = req.session ? req.session.user : null;
      res.render(file, { ...props, user: userData });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
};

// Render pages
renderPage("/", "index");
renderPage("/contact", "contact");
renderPage("/work", "work");

module.exports = router;
