const cheerio = require("cheerio");

async function obtainData(elem) {
  return fetch(
    `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${elem}`
  )
    .then((response) => response.json())
    .then((data) => data.parse);
}

async function on(elem, important) {
  return new Promise((resolve, reject) => {
    obtainData(elem)
      .then((data) => {
        const $ = cheerio.load(data.text["*"]);
        const infobox = $(".infobox").first();
        const rows = infobox.find("tr");

        let oxidationState = "";

        rows.each((index, row) => {
          const th = $(row).find("th").first();
          if (th.text().trim() === "Oxidation states") {
            const td = $(row).find("td").first();
            oxidationState = td.text().trim();
          }
        });

        oxidationState = oxidationState
          .split(",")
          .map((element) =>
            element
          .replace(/\[.*?\]/g, "")
          .replace(/\(([^\)]+)\)/g, "$1")
          .replace(/\s/g, "")
          .replace(/[A-Za-z]/g, "").trim()
          );

        const boldedWords = [];

        $("b").each((index, element) => {
          const boldedText = $(element).text().trim();
          if (
            oxidationState.includes(boldedText) &&
            ["+1","+2","+3","+4","+5","+6","+7","+8","+9","0","-1", "-2","-3","-4","-5","-6","-7","-8","-9",].includes(boldedText)
          ) {
            boldedWords.push(boldedText);
          }
        });

        if (important) {
          console.log(boldedWords);
          resolve(boldedWords);
        } else {
          console.log(oxidationState);
          resolve(oxidationState);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        reject(error);
      });
  });
}

async function check_elem(elem,what) {
  return new Promise((resolve, reject) => {
    obtainData(elem)
      .then((data) => {
        const $ = cheerio.load(data.text["*"]);
        const infobox = $(".infobox").first();
        const rows = infobox.find("tr");

        let meltingPoint = "";

        rows.each((index, row) => {
          const th = $(row).find("th").first();
          if (th.text().trim() === what) {
            const td = $(row).find("td").first();
            meltingPoint = td.text().trim();
          }
        });

        meltingPoint = meltingPoint
                          .split(/[^0-9.-]/)
                          .filter((item) => item !== "");

        if(what==="Melting point"||what==="Boiling point"){
          meltingPoint = Number(meltingPoint[0])
        }

        resolve(meltingPoint);
      });
  });
}

check_elem("Uranium","Melting point").then((data) => {
  console.log(data)
})