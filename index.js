const { Urls } = require("./src/websites");
const { scanWebsite } = require("./src/index.js");

return new Promise(async (resolve, reject) => {
  try {
    for (const Url of Urls) {
      await scanWebsite(Url);
    }
    resolve("All websites have been scanned successfully.");
  } catch (error) {
    reject(error);
  }
});
