const { Urls } = require("./src/websites");
const { scanWebsite } = require("./src/index.js");

for (const Url of Urls) {
  const output = async () => {
    await scanWebsite(Url);
  };

  output();
}
