require("dotenv").config();

const mongoose = require("mongoose");

const Job = require("./models/jobModel");

const fetchRemoteJobs = require("./utils/jobScrapers/remoteJobsScraper");
const fetchInternshalaJobs = require("./utils/jobScrapers/internshalaScraper");
const fetchNaukriJobs = require("./utils/jobScrapers/naukriScraper");
const fetchLinkedInJobs = require("./utils/jobScrapers/linkedinScraper");

async function runScraper() {

  try {

    console.log("Starting scraper...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected for scraper");

    const remoteJobs = await fetchRemoteJobs();
    console.log("Remote jobs:", remoteJobs.length);

    const internJobs = await fetchInternshalaJobs();
    console.log("Internshala jobs:", internJobs.length);

    const naukriJobs = await fetchNaukriJobs();
    console.log("Naukri jobs:", naukriJobs.length);

    const linkedinJobs = await fetchLinkedInJobs();
    console.log("LinkedIn jobs:", linkedinJobs.length);

    const allJobs = [
      ...remoteJobs,
      ...internJobs,
      ...naukriJobs,
      ...linkedinJobs
    ];

    console.log("Total jobs collected:", allJobs.length);

    let savedCount = 0;

    for (const job of allJobs) {

      const exists = await Job.findOne({ link: job.link });

      if (!exists) {

        await Job.create(job);

        savedCount++;

      }

    }

    console.log("New jobs saved:", savedCount);

    process.exit();

  } catch (error) {

    console.error("Scraper error:", error);

    process.exit();

  }

}

runScraper();