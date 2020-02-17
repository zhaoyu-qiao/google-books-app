const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// pay attention to the order here!!
// API Routes
router.use("/api", apiRoutes);

// catch all should be after api routes!!
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;