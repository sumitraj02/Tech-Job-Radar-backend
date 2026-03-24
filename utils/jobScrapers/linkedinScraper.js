const puppeteer = require("puppeteer");

async function fetchLinkedInJobs() {

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  });

  try {

    const page = await browser.newPage();

    await page.goto(
      "https://www.linkedin.com/jobs/search/?keywords=software%20engineer&location=India",
      { waitUntil: "networkidle2" }
    );

    await page.waitForSelector(".jobs-search__results-list");

    const jobs = await page.evaluate(() => {

      const data = [];

      document.querySelectorAll(".base-card").forEach(job => {

        const title = job.querySelector(".base-search-card__title")?.innerText;
        const company = job.querySelector(".base-search-card__subtitle")?.innerText;
        const location = job.querySelector(".job-search-card__location")?.innerText;
        const link = job.querySelector("a")?.href;

        data.push({
          title,
          company,
          location,
          type: "Full Time",
          source: "LinkedIn",
          link,
          date: new Date()
        });

      });

      return data;

    });

    await browser.close();

    return jobs;

  } catch (error) {

    console.error("LinkedIn scrape error:", error.message);

    await browser.close();

    return [];
  }
}

module.exports = fetchLinkedInJobs;