// DEPENDENCIES
const router = require("express").Router();
const path = require("path");


// 'GET' ROUTES
    // route to main page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
    // route to exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
    // route to statistics page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// EXPORTS
module.exports = router;