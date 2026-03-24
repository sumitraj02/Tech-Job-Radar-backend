const axios = require("axios");

async function fetchRemoteJobs() {
  try {
    const res = await axios.get("https://remotive.com/api/remote-jobs");

    const jobs = res.data.jobs.map(job => ({
      title: job.title,
      company: job.company_name,
      location: job.candidate_required_location,
      type: "Remote",
      source: "Remotive",
      link: job.url,
      date: new Date()
    }));

    return jobs;

  } catch (error) {
    console.error("Remote Jobs API error:", error.message);
    return [];
  }
}

module.exports = fetchRemoteJobs;