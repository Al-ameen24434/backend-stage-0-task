// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// User profile data
const userProfile = {
  email: "alameenabdulrahmon@gmail.com",
  name: "Al-Ameen Abdul Rahmon",
  stack: "Node.js/Express",
};

// Cat Facts API integration
async function fetchCatFact() {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, // 5 second timeout
    });
    return response.data.fact;
  } catch (error) {
    console.error("Cat Facts API error:", error.message);
    return "Unable to fetch cat fact at this time."; // Fallback message
  }
}

// Main endpoint
app.get("/me", async (req, res) => {
  try {
    const catFact = await fetchCatFact();
    const currentTimestamp = new Date().toISOString();

    const response = {
      status: "success",
      user: userProfile,
      timestamp: currentTimestamp,
      fact: catFact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(response);
  } catch (error) {
    console.error("Endpoint error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
