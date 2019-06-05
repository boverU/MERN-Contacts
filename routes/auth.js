const express = require("express");

const router = express.Router();

// @route  Get api/auth;
// @desc Get logged in user;
// @access Private;
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route  Post api/auth;
// @desc Auth user and get Token;
// @access Public;
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
