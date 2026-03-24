const express = require("express");
const router = express.Router();

const Job = require("../models/jobModel");

/*
================================
GET ALL JOBS
================================
*/

router.get("/", async (req, res) => {

  try {

    console.log("Fetching jobs from MongoDB...");

    const jobs = await Job.find({})
      .sort({ date: -1 })
      .limit(100);

    if (!jobs || jobs.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(jobs);

  } catch (error) {

    console.error("Error fetching jobs:", error);

    res.status(500).json({
      success: false,
      message: "Server error while fetching jobs"
    });

  }

});

module.exports = router;