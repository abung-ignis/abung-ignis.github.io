const cheerio = require("cheerio");
const fs = require("fs");

async function obtainData(elem) {
  return fetch(
    `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${elem}`
  )
    .then((response) => response.json())
    .then((data) => data.parse);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

        let elem_value = "";

        rows.each((index, row) => {
          const rowText = $(row).text();
          if (rowText.includes(what)) {
            const td = $(row).find("td").first();
            elem_value = td.text().trim();
          }
        });

        elem_value = elem_value
                          .split(/[^0-9.-]/)
                          .filter((item) => item !== "");

        elem_value = Number(elem_value[0])

        resolve(elem_value);
      });
  });
}

async function check_multiple(elem, what) {
  return new Promise((resolve, reject) => {
    obtainData(elem)
      .then((data) => {
        const $ = cheerio.load(data.text["*"]);
        const infobox = $(".infobox").first();
        const rows = infobox.find("tr");

        let meltingPoint = "";

        rows.each((index, row) => {
          const rowText = $(row).text();
          if (rowText.includes(what)) {
            const td = $(row).find("td").first();
            meltingPoint = td.text().trim();
          }
        });

        console.log(what)
        console.log(meltingPoint)

        meltingPoint = meltingPoint
                          .split(/[^0-9.-]/)
                          .filter((item) => item !== "");

        for(const [i, value] of meltingPoint.entries()){
          meltingPoint[i] = Number(value)
        }

        resolve(meltingPoint);
      });
  });
}

function JsonGet(filename) {
  try {
    // Read existing JSON data from the file
    let jsonData = {};
    if (fs.existsSync(`${filename}.json`)) {
      const existingData = fs.readFileSync(`${filename}.json`, 'utf8');
      console.log(existingData)
      existingData!==""?jsonData = JSON.parse(existingData):jsonData = {}
    }

    return jsonData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function JsonWrite(data, filename) {
  try {
    // Read existing JSON data from the file
    jsonData = JsonGet(filename)
    console.log(jsonData)

    // Merge existing data with the new data
    const mergedData = { ...jsonData, ...(await data) };

    // Convert the merged data to JSON format
    const jsondata = JSON.stringify(mergedData, null, 2);

    // Write the JSON data back to the file
    fs.writeFileSync(`${filename}.json`, jsondata);

    console.log(`Data added to ${filename}.json successfully.`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function infos_get(elem){
  return new Promise((resolve, reject) => {
      const elem_data = {};
      Promise.all([
        check_elem(elem, "Melting point").then((data) => {
          console.log("Melting point: " + data)
          elem_data["melting"] = data;
        }),
        check_elem(elem, "Boiling point").then((data) => {
          console.log("Boiling point :" + data)
          elem_data["boiling"] = data;
        }),
        check_elem(elem, "Density").then((data) => {
          console.log("Density: " + data)
          elem_data["density"] = data;
        }),
        check_elem(elem, "Heat of fusion").then((data) => {
          console.log("Heat of fusion: " + data)
          elem_data["lf"] = data;
        }),
        check_elem(elem, "Heat of vaporization").then((data) => {
          console.log("Heat of vaporization: " + data)
          elem_data["lv"] = data;
        }),
        check_elem(elem, "Atomic radius").then((data) => {
          console.log("Atomic radius: " + data)
          elem_data["atomic_radius"] = data;
        }),
        check_elem(elem, "Covalent radius").then((data) => {
          console.log("Covalent radius: " + data)
          elem_data["covalent_radius"] = data;
        }),
        check_elem(elem, "Van der Waals radius").then((data) => {
          console.log("Van der Waals radius: " + data)
          elem_data["van_der_waals_radius"] = data;
        }),
        check_elem(elem, "Electronegativity").then((data) => {
          console.log("Electronegativity: " + data)
          elem_data["electronegativity"] = data;
        }),
        on(elem, false).then((data) => {
          console.log("On: " + data)
          elem_data["on"] = data;
        }),
        on(elem, true).then((data) => {
          console.log("Important ons: " + data)
          elem_data["important_on"] = data;
        }),
        check_multiple(elem,"Electrons per shell").then((data) => {
          console.log("Electrons per shell: " + data)
          elem_data["electron_shell"] = data;
        }),
        check_multiple(elem,"Ionization energies").then((data) => {
          console.log("Ionization energies: " + data)
          elem_data["ionization_energies"] = data;
        })
    ])
      .then(() => {
        dict = {}

        dict[elem] = elem_data
        resolve(dict);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// check_elem("Hydrogen","Critical point").then((data) => {
//   console.log(data)
// })

// check_multiple("Sodium","Electrons per shell").then((data) => {
//   console.log(data)
// })

// on("nitrogen", true).then(
//   (data) => console.log(data)
// )

(async function element_state(){
  for(elem of ["Hydrogen","Helium","Lithium","Beryllium","Boron",
    "Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium",
    "Aluminium","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium",
    "Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron",
    "Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium",
    "Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium",
    "Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium",
    "Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Caesium","Barium",
    "Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium",
    "Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium",
    "Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold",
    "Mercury (element)","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium",
    "Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium",
    "Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium",
    "Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium",
    "Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium",
    "Tennessine","Oganesson"
  ]){
    try {
      const data = await infos_get(elem);
      JsonWrite(data, "extra_info");
    } catch (error) {
      console.error(error);
    }
  }
})()

// fetch(
//   `https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON`
// )
//   .then(function(response){return response.text()})
//   .then(function(data){
//     console.log(data)
//     mw = JSON.parse(data)
//     console.log(mw)
//   });
