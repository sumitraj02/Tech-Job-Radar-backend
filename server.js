require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const jobsRoute = require("./routes/jobs");

const app = express();

/*
============================
MIDDLEWARE
============================
*/

app.use(cors());
app.use(express.json());

/*
============================
HEALTH CHECK ROUTE
============================
Used by Render / Railway to check server
*/

app.get("/", (req, res) => {
  res.json({
    status: "Tech Job Radar API running",
    version: "1.0"
  });
});

/*
============================
API ROUTES
============================
*/

app.use("/api/jobs", jobsRoute);

/*
============================
DATABASE CONNECTION
============================
*/

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");

  // Start server only after DB connection
  startServer();
})
.catch(err => {
  console.error("MongoDB connection error:", err);
});

/*
============================
START SERVER
============================
*/

function startServer() {

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });

}

/*
============================
GLOBAL ERROR HANDLER
============================
*/

app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });

});