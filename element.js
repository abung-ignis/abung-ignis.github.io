const cheerio = require("cheerio");

function obtainData() {
  return fetch(
    "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Sodium"
  )
    .then((response) => response.json())
    .then((data) => data.parse);
}

obtainData().then((data) => {
  const $ = cheerio.load(data.text["*"]);
  const infobox = $(".infobox").first();
  const rows = infobox.find("tr");

  let meltingPoint = "";

  rows.each((index, row) => {
    const th = $(row).find("th").first();
    if (th.text().trim() === "Oxidation states") {
      const td = $(row).find("td").first();
      meltingPoint = td.text().trim();
    }
  });

  console.log("Melting point:", meltingPoint);
})
.catch((error) => {
  console.error("An error occurred:", error);
});