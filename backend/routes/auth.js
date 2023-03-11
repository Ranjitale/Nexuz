const express = require("express");
const router = express.Router();

// Login endpoint
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Authenticate user and generate JWT token
  // Return token in response
  res.json({ token: "sampletoken" });
});

module.exports = router;
