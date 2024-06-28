import * as name from "./element.js";
const table = document.querySelectorAll('tr > td > div')
const titles = document.getElementById('title')
const the_table = document.getElementById('table')
const display_block = document.getElementById('display_block')
const little_title = document.getElementById('little_title')
const little_subtitle = document.getElementById('little_subtitle')
const god_info_first = document.getElementById('god_info_first')
const god_info_second = document.getElementById('god_info_second')
const god_info_third = document.getElementById('god_info_third')
var bright = true
var intervals = []
var elemento = []
var god_info = []
var extra_info = []

fetch('./info.json')
    .then((response) => response.json())
    .then(function(json){
        console.log(json);
        god_info = json
    });

function element_info(the_id){
    god_info_second.innerText = god_info[the_id]['duty']
    // var strs = god_info[the_id]['ps'].join("<br><br>")
    // god_info_third.innerHTML = `<p id="god_info_third">${strs}</p>`
    var god_lst = []
    console.log(god_info[the_id]['melting']-273.15)
    document.getElementById('small_title_1').innerText = "神明名字"
    document.getElementById('small_title_2').innerText = "神職"
    // document.getElementById('small_title_3').innerText = "小資訊"
    document.getElementById('small_title_4').innerText = "氧化數"
    document.getElementById('small_title_3').innerText = "熔點"
    document.getElementById('small_title_5').innerText = "沸點"
    document.getElementById('small_title_6').innerText = "電子排序"
    document.getElementById('element_info_1').innerHTML = `<p class= "infos" id="element_info_1">${(god_info[the_id]['melting']-273.15).toFixed(2)}℃<br>(${(god_info[the_id]['melting']).toFixed(2)}K)</p>`
    document.getElementById('element_info_2').innerHTML = `<p class= "infos" id="element_info_2">${(god_info[the_id]['boiling']-273.15).toFixed(2)}℃<br>(${(god_info[the_id]['boiling']).toFixed(2)}K)</p>`
    console.log(god_info[the_id]['god'])
    for(let names of god_info[the_id]['god']){
        if(god_info[the_id]['god_sex'][god_info[the_id]['god_sex'].indexOf(names)] === "男"){
            god_lst.push(`<span style="color: rgb(169, 169, 255)">${names}</span>`)
        }else{
            god_lst.push(`<span style="color: rgb(255, 169, 169)">${names}</span>`)
        }
    }
    document.getElementById("another").innerHTML = `<tr id="another"></tr>`
    document.getElementById("element_another").innerHTML = `<tr id="element_another"></tr>`
    for(let oxidation of god_info[the_id]['on']){
        var td = document.createElement("td");
        td.innerHTML = `<td id="not_wide"></td>`
        document.getElementById("another").appendChild(td)
        console.log(td)
        if(oxidation != "0"){
            oxidation = oxidation[1]+oxidation[0]
        }
        let colour = god_info[the_id]['color'][oxidation]
        console.log(oxidation)
        console.log(colour)
        if(colour === undefined){
            colour = ["無色"]
        }
        var div = document.createElement("div")
        if(god_info[the_id]['important_on'].indexOf(oxidation) != -1){
            div.innerHTML = `<div class="block" id="on" style="background-color: ${colour[1]}; color: yellow;">${oxidation}</div>`
        }else{
            div.innerHTML = `<div class="block" id="on" style="background-color: ${colour[1]};">${oxidation}</div>`
        }
        td.appendChild(div);
        console.log(div.innerHTML)
    }
    for([index,shells] of god_info[the_id]['shells'].entries()){
        var td = document.createElement("td");
        td.innerHTML = `<td id="another_not_wide"></td>`
        document.getElementById("element_another").appendChild(td)
        console.log(td)
        var div = document.createElement("div")
        div.innerHTML = `<div class="block" id="electron">${shells}</div>`
        td.appendChild(div);
        console.log(div.innerHTML)
    }
    god_info_first.innerHTML = god_lst.join("、")
    little_title.innerText = the_id
    little_subtitle.innerText = god_info[the_id]['name']
} 

titles.onclick = () => {
    table.forEach(chmelem => {
        if(bright&&chmelem.id!="on"){
            chmelem.style.opacity = 0.5
        }else{
            chmelem.style.opacity = 1
        }
    })
    bright?bright=false:bright=true;
    if(bright===false){
        for(var i=0;i<118;i++){
            intervals.push(setTimeout(function(){
                elem = table[(Math.floor(Math.random() * table.length))];
                while(elem.getAttribute("class") === 'text'|| elem.id ==="on"){
                    console.log("awa")
                    elem = table[(Math.floor(Math.random() * table.length))];
                };
                display_block.style.backgroundColor = window.getComputedStyle(elem).getPropertyValue('background-color')
                elem.style.opacity = 1;
                elemento.push(elem.id);
                little_title.innerText = elem.innerText
                try{element_info(elem.id)}catch(awa){
                }finally{}
            },100+i*100))
            intervals.push(setTimeout(function(){
                console.log(elemento.lastIndexOf(elem.id));
                if(elemento.lastIndexOf(elem.id)!==117){
                    elem.style.opacity = 0.5
                }else{
                    elem.style.opacity = 1;
                    console.log('awa')
                };
            },200+i*100))
        }
    }else{
        for(const inter of intervals){
            clearInterval(inter)
            elemento = []
        }
    }
}

table.forEach(chmelem => {
    chmelem.onclick = () => {
        display_block.style.backgroundColor = window.getComputedStyle(chmelem).getPropertyValue('background-color')
        console.log(window.getComputedStyle(chmelem).getPropertyValue('background-color'))
        element_info(chmelem.id)
        chmelem.textContent = name.name_convert(chmelem.textContent)
    }
})