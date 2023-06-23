const {
  checkForXSS,
  checkForSQLInjection,
  checkForCSRF1,
  checkForCommandInjection,
  checkForFileInclusion,
  checkForIDOR,
  checkForCSRF2,
  checkForUnvalidatedRedirects,
  checkForSSRF,
} = require("./utils/functions");
const axios = require("axios");
const cheerio = require("cheerio");

async function scanWebsite(url) {
  try {
    // Send a GET request to the website
    const response = await axios.get(url);

    // Check the response status code
    if (response.status !== 200) {
      throw new Error(
        `Website at ${url} returned a ${response.status} status code.`
      );
    }

    // Load the HTML response into cheerio for parsing
    const $ = cheerio.load(response.data);

    // Check for common vulnerabilities
    checkForXSS($, url);
    checkForSQLInjection($, url);
    checkForCSRF1($, url);
    checkForCommandInjection($, url);
    checkForFileInclusion($, url);
    checkForIDOR($, url);
    checkForCSRF2($, url);
    checkForUnvalidatedRedirects($, url);
    checkForSSRF($, url);
    // Print success message
    console.log(`Website at ${url} is not vulnerable.`);
  } catch (error) {
    console.log(`Error scanning ${url}: ${error}`);
  }
}

module.exports = {
  scanWebsite,
};
