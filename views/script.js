import * as name from "./element.js";

// Select relevant DOM elements
const table = document.querySelectorAll('tr > td > div');
const titles = document.getElementById('title');
const the_table = document.getElementById('table');
const display_block = document.getElementById('display_block');
const little_title = document.getElementById('little_title');
const little_subtitle = document.getElementById('little_subtitle');
const god_info_first = document.getElementById('god_info_first');
const god_info_second = document.getElementById('god_info_second');
const god_info_third = document.getElementById('god_info_third');

// Initialize variables
var bright = true;
var intervals = [];
var elemento = [];
var god_info = [];
var extra_info = [];

// Fetch data from JSON file
fetch('./info.json')
    .then((response) => response.json())
    .then(function (json) {
        console.log(json);
        god_info = json;
    });

// Function to fill data into specific elements
function fill_data(the_id, what, where, unit) {
    if (god_info[the_id][what] !== null) {
        document.getElementById(where).innerHTML = `<p class="infos" id="${where}">${god_info[the_id][what]}${unit}</p>`;
    } else {
        document.getElementById(where).innerHTML = `<p class="infos" id="${where}">未知</p>`;
    }
}

// Function to display information about an element
function element_info(the_id) {
    god_info_second.innerText = god_info[the_id]['duty'] || "無";

    // Set titles for displayed information
    document.getElementById('small_title_1').innerText = "神明名字";
    document.getElementById('small_title_2').innerText = "神職";
    document.getElementById('small_title_3').innerText = "熔點";
    document.getElementById('small_title_4').innerText = "氧化數";
    document.getElementById('small_title_5').innerText = "沸點";
    document.getElementById('small_title_6').innerText = "電子排序";
    document.getElementById('small_title_7').innerText = "火焰顏色";
    document.getElementById('small_title_8').innerText = "密度";
    document.getElementById('small_title_9').innerText = "電負度";
    document.getElementById('small_title_10').innerText = "共價半徑";
    document.getElementById('small_title_11').innerText = "原子半徑";
    document.getElementById('small_title_12').innerText = "范德華半徑";

    // Display melting point
    if (god_info[the_id]['melting'] !== null) {
        document.getElementById('element_info_1').innerHTML = `<p class="infos" id="element_info_1">${(god_info[the_id]['melting'] - 273.15).toFixed(2)}℃<br>(${(god_info[the_id]['melting']).toFixed(2)}K)</p>`;
    } else {
        document.getElementById('element_info_1').innerHTML = `<p class="infos" id="element_info_1">未知</p>`;
    }

    // Display boiling point
    if (god_info[the_id]['boiling'] !== null) {
        document.getElementById('element_info_2').innerHTML = `<p class="infos" id="element_info_2">${(god_info[the_id]['boiling'] - 273.15).toFixed(2)}℃<br>(${(god_info[the_id]['boiling']).toFixed(2)}K)</p>`;
    } else {
        document.getElementById('element_info_2').innerHTML = `<p class="infos" id="element_info_2">未知</p>`;
    }

    // Display density based on element type
    const densityUnit = ["H", "He", "N", "O", "F", "Ne", "Cl", "Ar", "Kr", "Xe", "Rn", "Og"].includes(the_id) ? "g/L" : "g/cm³";
    fill_data(the_id, "density", "element_info_3", densityUnit);
    
    // Fill in other properties
    fill_data(the_id, "electronegativity", "god_info_fourth", "");
    fill_data(the_id, "covalent_radius", "god_info_fifth", "pm");
    fill_data(the_id, "atomic_radius", "god_info_sixth", "pm");
    fill_data(the_id, "van_der_waals_radius", "god_info_seventh", "pm");

    // List gods associated with the element
    var god_lst = [];
    for (let names of god_info[the_id]['god']) {
        const color = god_info[the_id]['god_sex'][god_info[the_id]['god'].indexOf(names)] === "男" ? 
            'rgb(169, 169, 255)' : 'rgb(255, 169, 169)';
        god_lst.push(`<span style="color: ${color}">${names}</span>`);
    }

    // Display oxidation states
    document.getElementById("another").innerHTML = `<tr id="another"></tr>`;
    document.getElementById("element_another").innerHTML = `<tr id="element_another"></tr>`;
    
    for (let oxidation of god_info[the_id]['on']) {
        var td = document.createElement("td");
        document.getElementById("another").appendChild(td);
        
        var ion = oxidation !== "0" ? oxidation[1] + oxidation[0] : "0";
        let colour = god_info[the_id]['color'][ion] || ["無色", "#808080"];
        
        var div = document.createElement("div");
        div.innerHTML = `<div class="block" id="on" style="background-color: ${colour[1]};">${oxidation}</div>`;
        
        td.appendChild(div);
    }

    // Color and display flame color
    document.getElementById("god_info_third").innerHTML = `<p class="infos" id="god_info_third" style="color: ${god_info[the_id]['flame_color'][1]};">${god_info[the_id]['flame_color'][0]}</p>`;

    // Display electron shells
    for (let shells of god_info[the_id]['electron_shell']) {
        var td = document.createElement("td");
        document.getElementById("element_another").appendChild(td);
        var div = document.createElement("div");
        div.innerHTML = `<div class="block" id="electron">${shells}</div>`;
        td.appendChild(div);
    }

    // Update displayed names
    god_info_first.innerHTML = god_lst.join("、");
    little_title.innerText = the_id;
    little_subtitle.innerText = god_info[the_id]['name'];
}

// Toggle brightness and display random elements
titles.onclick = () => {
    table.forEach(chmelem => {
        chmelem.style.opacity = bright && chmelem.id != "on" ? 0.5 : 1;
    });

    bright = !bright;

    if (!bright) {
        for (var i = 0; i < 118; i++) {
            intervals.push(setTimeout(() => {
                let elem;
                do {
                    elem = table[Math.floor(Math.random() * table.length)];
                } while (elem.getAttribute("class") === 'text' || elem.id === "on");
                
                display_block.style.backgroundColor = window.getComputedStyle(elem).getPropertyValue('background-color');
                elem.style.opacity = 1;
                elemento.push(elem.id);
                little_title.innerText = elem.innerText;
                
                try {
                    element_info(elem.id);
                } catch (awa) {}
                
            }, 100 + i * 100));

            intervals.push(setTimeout(() => {
                const elem = elemento[elemento.length - 1];
                elem.style.opacity = elemento.lastIndexOf(elem.id) !== 117 ? 0.5 : 1;
            }, 200 + i * 100));
        }
    } else {
        intervals.forEach(inter => clearInterval(inter));
        elemento = [];
    }
}

// Add click event to each element in the table
table.forEach(chmelem => {
    chmelem.onclick = () => {
        if (chmelem.className === "text") return;

        display_block.style.backgroundColor = window.getComputedStyle(chmelem).getPropertyValue('background-color');
        element_info(chmelem.id);
        
        name.name_convert(chmelem.innerText).then((result) => {
            chmelem.textContent = result;
        });
    };
});