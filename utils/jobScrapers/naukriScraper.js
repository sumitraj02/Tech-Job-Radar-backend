const puppeteer = require("puppeteer");

async function fetchNaukriJobs() {

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  });

  try {

    const page = await browser.newPage();

    await page.goto(
      "https://www.naukri.com/software-developer-jobs",
      { waitUntil: "networkidle2" }
    );

    await page.waitForSelector(".jobTuple");

    const jobs = await page.evaluate(() => {

      const data = [];

      document.querySelectorAll(".jobTuple").forEach(job => {

        const title = job.querySelector(".title")?.innerText;
        const company = job.querySelector(".companyInfo a")?.innerText;
        const location = job.querySelector(".locWdth")?.innerText;
        const link = job.querySelector(".title")?.href;

        data.push({
          title,
          company,
          location,
          type: "Full Time",
          source: "Naukri",
          link,
          date: new Date()
        });

      });

      return data;
    });

    await browser.close();

    return jobs;

  } catch (error) {

    console.error("Naukri scrape error:", error.message);

    await browser.close();

    return [];
  }
}

module.exports = fetchNaukriJobs;