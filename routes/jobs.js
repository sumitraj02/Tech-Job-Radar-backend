const express = require("express");
const router = express.Router();

// 1. Double-check this path! 
// It assumes your folders are: /backend/models/jobModel.js
const Job = require("../models/jobModel.js");

router.get("/", async (req, res) => {
    try {
        // 2. Fetch jobs and sort by date descending
        const jobs = await Job.find().sort({ date: -1 });
        
        // 3. Send response
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: "Server error while fetching jobs" });
    }
});

module.exports = router;