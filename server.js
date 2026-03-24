require("dotenv").config(); // 1. MUST BE AT THE TOP
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobsRoute = require("./routes/jobs");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 2. Add error handling for the connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/jobs", jobsRoute);

// 3. Use a dynamic port or a constant
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



const Job = require("./models/jobModel");

app.get("/add-job", async (req, res) => {
  const job = new Job({
    title: "Google Software Engineer Intern",
    company: "Google",
    location: "India",
    link: "https://careers.google.com",
    type: "Internship"
  });

  await job.save();

  res.send("Job Added Successfully");
});