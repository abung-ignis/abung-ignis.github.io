const table = document.querySelectorAll('td > div')
const titles = document.getElementById('title')
const the_table = document.getElementById('table')


titles.onclick = () => {
    table.forEach(chmelem => {
        if(Number(chmelem.style.opacity) === 0.5){
            chmelem.style.opacity = 1
        }else{
            chmelem.style.opacity = 0.5
        }
    })
    elem = table[(Math.floor(Math.random() * table.length))]
    while(elem.class === 'text'){
        elem = table[(Math.floor(Math.random() * table.length))]
    }
    elem.style.opacity = 1
}

table.forEach(chmelem => {
    chmelem.onclick = () => {
        if(chmelem.textContent === "Na"){
            chmelem.textContent = "鈉"
        }else if(chmelem.textContent === "鈉"){
            chmelem.textContent = "Na"
        }else if(chmelem.textContent === "H"){
            chmelem.textContent = "氫"
        }else if(chmelem.textContent === "氫"){
            chmelem.textContent = "H"
        }else if(chmelem.textContent === "He"){
            chmelem.textContent = "氦"
        }else if(chmelem.textContent === "氦"){
            chmelem.textContent = "He"
        }else if(chmelem.textContent === "Li"){
            chmelem.textContent = "鋰"
        }else if(chmelem.textContent === "鋰"){
            chmelem.textContent = "Li"
        }else if(chmelem.textContent === "Be"){
            chmelem.textContent = "鈹"
        }else if(chmelem.textContent === "鈹"){
            chmelem.textContent = "Be"
        }else if(chmelem.textContent === "B"){
            chmelem.textContent = "硼"
        }else if(chmelem.textContent === "硼"){
            chmelem.textContent = "B"
        }else if(chmelem.textContent === "C"){
            chmelem.textContent = "碳"
        }else if(chmelem.textContent === "碳"){
            chmelem.textContent = "C"
        }else if(chmelem.textContent === "N"){
            chmelem.textContent = "氮"
        }else if(chmelem.textContent === "氮"){
            chmelem.textContent = "N"
        }else if(chmelem.textContent === "O"){
            chmelem.textContent = "氧"
        }else if(chmelem.textContent === "氧"){
            chmelem.textContent = "O"
        }else if(chmelem.textContent === "F"){
            chmelem.textContent = "氟"
        }else if(chmelem.textContent === "氟"){
            chmelem.textContent = "F"
        }else if(chmelem.textContent === "Ne"){
            chmelem.textContent = "氖"
        }else if(chmelem.textContent === "氖"){
            chmelem.textContent = "Ne"
        }else if(chmelem.textContent === "Mg"){
            chmelem.textContent = "鎂"
        }else if(chmelem.textContent === "鎂"){
            chmelem.textContent = "Mg"
        }else if(chmelem.textContent === "Al"){
            chmelem.textContent = "鋁"
        }else if(chmelem.textContent === "鋁"){
            chmelem.textContent = "Al"
        }else if(chmelem.textContent === "Si"){
            chmelem.textContent = "矽"
        }else if(chmelem.textContent === "矽"){
            chmelem.textContent = "Si"
        }else if(chmelem.textContent === "P"){
            chmelem.textContent = "磷"
        }else if(chmelem.textContent === "磷"){
            chmelem.textContent = "P"
        }else if(chmelem.textContent === "S"){
            chmelem.textContent = "硫"
        }else if(chmelem.textContent === "硫"){
            chmelem.textContent = "S"
        }else if(chmelem.textContent === "Cl"){
            chmelem.textContent = "氯"
        }else if(chmelem.textContent === "氯"){
            chmelem.textContent = "Cl"
        }else if(chmelem.textContent === "Ar"){
            chmelem.textContent = "氬"
        }else if(chmelem.textContent === "氬"){
            chmelem.textContent = "Ar"
        }else if(chmelem.textContent === "K"){
            chmelem.textContent = "鉀"
        }else if(chmelem.textContent === "鉀"){
            chmelem.textContent = "K"
        }else if(chmelem.textContent === "Ca"){
            chmelem.textContent = "鈣"
        }else if(chmelem.textContent === "鈣"){
            chmelem.textContent = "Ca"
        }else if(chmelem.textContent === "Mn"){
            chmelem.textContent = "錳"
        }else if(chmelem.textContent === "錳"){
            chmelem.textContent = "Mn"
        }else if(chmelem.textContent === "Sc"){
            chmelem.textContent = "鈧"
        }else if(chmelem.textContent === "鈧"){
            chmelem.textContent = "Sc"
        }else if(chmelem.textContent === "V"){
            chmelem.textContent = "釩"
        }else if(chmelem.textContent === "釩"){
            chmelem.textContent = "V"
        }else if(chmelem.textContent === "Cr"){
            chmelem.textContent = "鉻"
        }else if(chmelem.textContent === "鉻"){
            chmelem.textContent = "Cr"
        }else if(chmelem.textContent === "Fe"){
            chmelem.textContent = "鐵"
        }else if(chmelem.textContent === "鐵"){
            chmelem.textContent = "Fe"
        }else if(chmelem.textContent === "Co"){
            chmelem.textContent = "鈷"
        }else if(chmelem.textContent === "鈷"){
            chmelem.textContent = "Co"
        }else if(chmelem.textContent === "Ni"){
            chmelem.textContent = "鎳"
        }else if(chmelem.textContent === "鎳"){
            chmelem.textContent = "Ni"
        }else if(chmelem.textContent === "銅"){
            chmelem.textContent = "Cu"
        }else if(chmelem.textContent === "Cu"){
            chmelem.textContent = "銅"
        }else if(chmelem.textContent === "Zn"){
            chmelem.textContent = "鋅"
        }else if(chmelem.textContent === "鋅"){
            chmelem.textContent = "Zn"
        }else if(chmelem.textContent === "Ga"){
            chmelem.textContent = "鎵"
        }else if(chmelem.textContent === "鎵"){
            chmelem.textContent = "Ga"
        }else if(chmelem.textContent === "Ge"){
            chmelem.textContent = "鍺"
        }else if(chmelem.textContent === "鍺"){
            chmelem.textContent = "Ge"
        }else if(chmelem.textContent === "As"){
            chmelem.textContent = "砷"
        }else if(chmelem.textContent === "砷"){
            chmelem.textContent = "As"
        }else if(chmelem.textContent === "Se"){
            chmelem.textContent = "硒"
        }else if(chmelem.textContent === "硒"){
            chmelem.textContent = "Se"
        }else if(chmelem.textContent === "Br"){
            chmelem.textContent = "溴"
        }else if(chmelem.textContent === "溴"){
            chmelem.textContent = "Br"
        }else if(chmelem.textContent === "Kr"){
            chmelem.textContent = "氪"
        }else if(chmelem.textContent === "氪"){
            chmelem.textContent = "Kr"
        }else if(chmelem.textContent === "Rb"){
            chmelem.textContent = "銣"
        }else if(chmelem.textContent === "銣"){
            chmelem.textContent = "Rb"
        }else if(chmelem.textContent === "Sr"){
            chmelem.textContent = "鍶"
        }else if(chmelem.textContent === "鍶"){
            chmelem.textContent = "Sr"
        }else if(chmelem.textContent === "Zr"){
            chmelem.textContent = "鋯"
        }else if(chmelem.textContent === "鋯"){
            chmelem.textContent = "Zr"
        }else if(chmelem.textContent === "Nb"){
            chmelem.textContent = "鈮"
        }else if(chmelem.textContent === "鈮"){
            chmelem.textContent = "Nb"
        }else if(chmelem.textContent === "Mo"){
            chmelem.textContent = "鉬"
        }else if(chmelem.textContent === "鉬"){
            chmelem.textContent = "Mo"
        }else if(chmelem.textContent === "鎝"){
            chmelem.textContent = "Tc"
        }else if(chmelem.textContent === "Tc"){
            chmelem.textContent = "鎝"
        }else if(chmelem.textContent === "釕"){
            chmelem.textContent = "Ru"
        }else if(chmelem.textContent === "Ru"){
            chmelem.textContent = "釕"
        }else if(chmelem.textContent === "銠"){
            chmelem.textContent = "Rh"
        }else if(chmelem.textContent === "Rh"){
            chmelem.textContent = "銠"
        }else if(chmelem.textContent === "Pd"){
            chmelem.textContent = "鈀"
        }else if(chmelem.textContent === "鈀"){
            chmelem.textContent = "Pd"
        }else if(chmelem.textContent === "Ag"){
            chmelem.textContent = "銀"
        }else if(chmelem.textContent === "銀"){
            chmelem.textContent = "Ag"
        }else if(chmelem.textContent === "Cd"){
            chmelem.textContent = "鎘"
        }else if(chmelem.textContent === "鎘"){
            chmelem.textContent = "Cd"
        }else if(chmelem.textContent === "In"){
            chmelem.textContent = "銦"
        }else if(chmelem.textContent === "Sn"){
            chmelem.textContent = "錫"
        }else if(chmelem.textContent === "錫"){
            chmelem.textContent = "Sn"
        }else if(chmelem.textContent === "Sn"){
            chmelem.textContent = "錫"
        }else if(chmelem.textContent === "錫"){
            chmelem.textContent = "Sn"
        }else if(chmelem.textContent === "Sn"){
            chmelem.textContent = "錫"
        }else if(chmelem.textContent === "錫"){
            chmelem.textContent = "Sn"
        }else if(chmelem.textContent === "Sb"){
            chmelem.textContent = "銻"
        }else if(chmelem.textContent === "銻"){
            chmelem.textContent = "Sb"
        }else if(chmelem.textContent === "Ta"){
            chmelem.textContent = "碲"
        }else if(chmelem.textContent === "碲"){
            chmelem.textContent = "Ta"
        }else if(chmelem.textContent === "I"){
            chmelem.textContent = "碘"
        }else if(chmelem.textContent === "碘"){
            chmelem.textContent = "I"
        }else if(chmelem.textContent === "Xe"){
            chmelem.textContent = "氙"
        }else if(chmelem.textContent === "氙"){
            chmelem.textContent = "Xe"
        }else if(chmelem.textContent === "Cs"){
            chmelem.textContent = "銫"
        }else if(chmelem.textContent === "銫"){
            chmelem.textContent = "Cs"
        }else if(chmelem.textContent === "鋇"){
            chmelem.textContent = "Ba"
        }else if(chmelem.textContent === "Ba"){
            chmelem.textContent = "鋇"
        }else if(chmelem.textContent === "Hf"){
            chmelem.textContent = "鉿"
        }else if(chmelem.textContent === "鉿"){
            chmelem.textContent = "Hf"
        }else if(chmelem.textContent === "Ta"){
            chmelem.textContent = "鉭"
        }else if(chmelem.textContent === "鉭"){
            chmelem.textContent = "Ta"
        }else if(chmelem.textContent === "W"){
            chmelem.textContent = "鎢"
        }else if(chmelem.textContent === "鎢"){
            chmelem.textContent = "W"
        }else if(chmelem.textContent === "Re"){
            chmelem.textContent = "錸"
        }else if(chmelem.textContent === "錸"){
            chmelem.textContent = "Re"
        }else if(chmelem.textContent === "Os"){
            chmelem.textContent = "鋨"
        }else if(chmelem.textContent === "鋨"){
            chmelem.textContent = "Os"
        }else if(chmelem.textContent === "Ir"){
            chmelem.textContent = "銥"
        }else if(chmelem.textContent === "銥"){
            chmelem.textContent = "Ir"
        }else if(chmelem.textContent === "Pt"){
            chmelem.textContent = "鉑"
        }else if(chmelem.textContent === "鉑"){
            chmelem.textContent = "Pt"
        }else if(chmelem.textContent === "Au"){
            chmelem.textContent = "金"
        }else if(chmelem.textContent === "金"){
            chmelem.textContent = "Au"
        }else if(chmelem.textContent === "Hg"){
            chmelem.textContent = "汞"
        }else if(chmelem.textContent === "汞"){
            chmelem.textContent = "Hg"
        }else if(chmelem.textContent === "Tl"){
            chmelem.textContent = "鉈"
        }else if(chmelem.textContent === "鉈"){
            chmelem.textContent = "Tl"
        }else if(chmelem.textContent === "Pb"){
            chmelem.textContent = "鉛"
        }else if(chmelem.textContent === "鉛"){
            chmelem.textContent = "Pb"
        }else if(chmelem.textContent === "Bi"){
            chmelem.textContent = "鉍"
        }else if(chmelem.textContent === "鉍"){
            chmelem.textContent = "Bi"
        }else if(chmelem.textContent === "Po"){
            chmelem.textContent = "釙"
        }else if(chmelem.textContent === "釙"){
            chmelem.textContent = "Po"
        }else if(chmelem.textContent === "At"){
            chmelem.textContent = "砈"
        }else if(chmelem.textContent === "砈"){
            chmelem.textContent = "At"
        }else if(chmelem.textContent === "Rn"){
            chmelem.textContent = "氡"
        }else if(chmelem.textContent === "氡"){
            chmelem.textContent = "Rn"
        }else if(chmelem.textContent === "Fr"){
            chmelem.textContent = "鍅"
        }else if(chmelem.textContent === "鍅"){
            chmelem.textContent = "Fr"
        }else if(chmelem.textContent === "Ra"){
            chmelem.textContent = "鐳"
        }else if(chmelem.textContent === "鐳"){
            chmelem.textContent = "Ra"
        }else if(chmelem.textContent === "Rf"){
            chmelem.textContent = "鑪"
        }else if(chmelem.textContent === "鑪"){
            chmelem.textContent = "Rf"
        }else if(chmelem.textContent === "Db"){
            chmelem.textContent = "𨧀"
        }else if(chmelem.textContent === "𨧀"){
            chmelem.textContent = "Db"
        }else if(chmelem.textContent === "Bh"){
            chmelem.textContent = "𨨏"
        }else if(chmelem.textContent === "𨨏"){
            chmelem.textContent = "Bh"
        }else if(chmelem.textContent === "Bh"){
            chmelem.textContent = "𨨏"
        }else if(chmelem.textContent === "𨨏"){
            chmelem.textContent = "Bh"
        }else if(chmelem.textContent === "Bh"){
            chmelem.textContent = "𨨏"
        }else if(chmelem.textContent === "𨨏"){
            chmelem.textContent = "Bh"
        }else if(chmelem.textContent === "Hs"){
            chmelem.textContent = "𨭆"
        }else if(chmelem.textContent === "𨭆"){
            chmelem.textContent = "Hs"
        }else if(chmelem.textContent === "Mt"){
            chmelem.textContent = "䥑"
        }else if(chmelem.textContent === "䥑"){
            chmelem.textContent = "Mt"
        }else if(chmelem.textContent === "Ds"){
            chmelem.textContent = "鐽"
        }else if(chmelem.textContent === "鐽"){
            chmelem.textContent = "Ds"
        }else if(chmelem.textContent === "Rg"){
            chmelem.textContent = "錀"
        }else if(chmelem.textContent === "錀"){
            chmelem.textContent = "Rg"
        }else if(chmelem.textContent === "Cn"){
            chmelem.textContent = "鎶"
        }else if(chmelem.textContent === "鎶"){
            chmelem.textContent = "Cn"
        }else if(chmelem.textContent === "Nh"){
            chmelem.textContent = "錀"
        }else if(chmelem.textContent === "鉨"){
            chmelem.textContent = "Nh"
        }else if(chmelem.textContent === "Fl"){
            chmelem.textContent = "鈇"
        }else if(chmelem.textContent === "鈇"){
            chmelem.textContent = "Fl"
        }else if(chmelem.textContent === "Mc"){
            chmelem.textContent = "鏌"
        }else if(chmelem.textContent === "鏌"){
            chmelem.textContent = "Mc"
        }else if(chmelem.textContent === "Lv"){
            chmelem.textContent = "鉝"
        }else if(chmelem.textContent === "鉝"){
            chmelem.textContent = "Lv"
        }else if(chmelem.textContent === "Ts"){
            chmelem.textContent = "鿬"
        }else if(chmelem.textContent === "鿬"){
            chmelem.textContent = "Ts"
        }else if(chmelem.textContent === "Og"){
            chmelem.textContent = "鿫"
        }else if(chmelem.textContent === "鿫"){
            chmelem.textContent = "Og"
        }else if(chmelem.textContent === "Te"){
            chmelem.textContent = "碲"
        }else if(chmelem.textContent === "碲"){
            chmelem.textContent = "Te"
        }else if(chmelem.textContent === "Sg"){
            chmelem.textContent = "𨭎"
        }else if(chmelem.textContent === "𨭎"){
            chmelem.textContent = "Sg"
        }else if(chmelem.textContent === "Ti"){
            chmelem.textContent = "鈦"
        }else if(chmelem.textContent === "鈦"){
            chmelem.textContent = "Ti"
        }else if(chmelem.textContent === "Y"){
            chmelem.textContent = "釔"
        }else if(chmelem.textContent === "釔"){
            chmelem.textContent = "Y"
        }else if(chmelem.textContent === "鑭"){
            chmelem.textContent = "La"
        }else if(chmelem.textContent === "La"){
            chmelem.textContent = "鑭"
        }else if(chmelem.textContent === "Ce"){
            chmelem.textContent = "鈰"
        }else if(chmelem.textContent === "鈰"){
            chmelem.textContent = "Ce"
        }else if(chmelem.textContent === "Pr"){
            chmelem.textContent = "鐠"
        }else if(chmelem.textContent === "鐠"){
            chmelem.textContent = "Pr"
        }else if(chmelem.textContent === "Nd"){
            chmelem.textContent = "釹"
        }else if(chmelem.textContent === "釹"){
            chmelem.textContent = "Nd"
        }else if(chmelem.textContent === "Pm"){
            chmelem.textContent = "鉕"
        }else if(chmelem.textContent === "鉕"){
            chmelem.textContent = "Pm"
        }else if(chmelem.textContent === "Sm"){
            chmelem.textContent = "釤"
        }else if(chmelem.textContent === "釤"){
            chmelem.textContent = "Sm"
        }else if(chmelem.textContent === "Eu"){
            chmelem.textContent = "銪"
        }else if(chmelem.textContent === "銪"){
            chmelem.textContent = "Eu"
        }else if(chmelem.textContent === "Gd"){
            chmelem.textContent = "釓"
        }else if(chmelem.textContent === "釓"){
            chmelem.textContent = "Gd"
        }else if(chmelem.textContent === "Tb"){
            chmelem.textContent = "鋱"
        }else if(chmelem.textContent === "鋱"){
            chmelem.textContent = "Tb"
        }else if(chmelem.textContent === "Dy"){
            chmelem.textContent = "鏑"
        }else if(chmelem.textContent === "鏑"){
            chmelem.textContent = "Dy"
        }else if(chmelem.textContent === "Ho"){
            chmelem.textContent = "鈥"
        }else if(chmelem.textContent === "鈥"){
            chmelem.textContent = "Ho"
        }else if(chmelem.textContent === "Er"){
            chmelem.textContent = "鉺"
        }else if(chmelem.textContent === "鉺"){
            chmelem.textContent = "Ho"
        }else if(chmelem.textContent === "Tm"){
            chmelem.textContent = "銩"
        }else if(chmelem.textContent === "銩"){
            chmelem.textContent = "Tm"
        }else if(chmelem.textContent === "Yb"){
            chmelem.textContent = "鐿"
        }else if(chmelem.textContent === "鐿"){
            chmelem.textContent = "Yb"
        }else if(chmelem.textContent === "Lu"){
            chmelem.textContent = "鑥"
        }else if(chmelem.textContent === "鑥"){
            chmelem.textContent = "Lu"
        }else if(chmelem.textContent === "Ac"){
            chmelem.textContent = "錒"
        }else if(chmelem.textContent === "錒"){
            chmelem.textContent = "Ac"
        }else if(chmelem.textContent === "Th"){
            chmelem.textContent = "釷"
        }else if(chmelem.textContent === "釷"){
            chmelem.textContent = "Th"
        }else if(chmelem.textContent === "Pa"){
            chmelem.textContent = "鏷"
        }else if(chmelem.textContent === "鏷"){
            chmelem.textContent = "Pa"
        }else if(chmelem.textContent === "U"){
            chmelem.textContent = "鈾"
        }else if(chmelem.textContent === "鈾"){
            chmelem.textContent = "U"
        }else if(chmelem.textContent === "Np"){
            chmelem.textContent = "錼"
        }else if(chmelem.textContent === "錼"){
            chmelem.textContent = "Np"
        }else if(chmelem.textContent === "Pu"){
            chmelem.textContent = "鈽"
        }else if(chmelem.textContent === "鈽"){
            chmelem.textContent = "Pu"
        }else if(chmelem.textContent === "Am"){
            chmelem.textContent = "鋂"
        }else if(chmelem.textContent === "鋂"){
            chmelem.textContent = "Am"
        }else if(chmelem.textContent === "Cm"){
            chmelem.textContent = "鋦"
        }else if(chmelem.textContent === "鋦"){
            chmelem.textContent = "Cm"
        }else if(chmelem.textContent === "Bk"){
            chmelem.textContent = "鉳"
        }else if(chmelem.textContent === "鉳"){
            chmelem.textContent = "Bk"
        }else if(chmelem.textContent === "Cf"){
            chmelem.textContent = "鉲"
        }else if(chmelem.textContent === "鉲"){
            chmelem.textContent = "Cf"
        }else if(chmelem.textContent === "Es"){
            chmelem.textContent = "鑀"
        }else if(chmelem.textContent === "鑀"){
            chmelem.textContent = "Es"
        }else if(chmelem.textContent === "Fm"){
            chmelem.textContent = "鐨"
        }else if(chmelem.textContent === "鐨"){
            chmelem.textContent = "Fm"
        }else if(chmelem.textContent === "Md"){
            chmelem.textContent = "鍆"
        }else if(chmelem.textContent === "鍆"){
            chmelem.textContent = "Md"
        }else if(chmelem.textContent === "鍩"){
            chmelem.textContent = "No"
        }else if(chmelem.textContent === "No"){
            chmelem.textContent = "鍩"
        }else if(chmelem.textContent === "Lr"){
            chmelem.textContent = "鐒"
        }else if(chmelem.textContent === "鐒"){
            chmelem.textContent = "Lr"
        }
    }
})