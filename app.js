// Import necessary modules
const express = require("express");
const session = require("express-session");
const connectToMongo = require("./db");
const app = express();
const port = 3000;
const routes = require("./routes/pageRoutes");
const feedbackController = require("./controller/feedbackController");
const workController = require("./controller/workController");

// Set up session middleware
app.use(
  session({
    secret: "Shashank",
    resave: false,
    saveUninitialized: false,
  })
);

// Connect to MongoDB
connectToMongo();

// Serve static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/img", express.static(__dirname + "/public/img"));

// Set view engine and body parser middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Render page function

// Routes
app.use(routes);
app.use(feedbackController);
app.use(workController);

// // Start server
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
