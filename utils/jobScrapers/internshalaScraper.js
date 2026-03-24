const axios = require("axios");
const cheerio = require("cheerio");

async function fetchInternshalaJobs() {
  try {

    const url =
      "https://internshala.com/internships/computer-science-internship/";

    const res = await axios.get(url);

    const $ = cheerio.load(res.data);

    const jobs = [];

    $(".individual_internship").each((i, el) => {

      const title = $(el).find(".job-internship-name").text().trim();

      const company = $(el)
        .find(".company-name")
        .text()
        .trim();

      const location = $(el)
        .find(".locations")
        .text()
        .trim();

      const link =
        "https://internshala.com" +
        $(el)
          .find(".job-title-href")
          .attr("href");

      jobs.push({
        title,
        company,
        location,
        type: "Internship",
        source: "Internshala",
        link,
        date: new Date()
      });
    });

    return jobs;

  } catch (error) {
    console.error("Internshala scrape error:", error.message);
    return [];
  }
}

module.exports = fetchInternshalaJobs;
