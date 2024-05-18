// console.log("hello js")
// console.log("Hi, Js")


//變數宣告
// let name = "awa"
// console.log(name)

// let sentence = "測試中..."
// console.log(name+sentence)

//prompt()和alert()
// fruit = prompt("你最喜歡的水果是什麼?")
// alert(fruit)


//parseInt: python的int()
// let food = parseInt(prompt('這餐食物花費多少錢'))
// let tipPercentage = parseInt(prompt("小費幾多%?"))/100
// let tipAmount = food * tipPercentage
// let total = food + tipAmount
// console.log("小費金額" + tipAmount)
// console.log("總金額" + total)

//variables
// var x = 1;
// console.log(x==1)
// console.log(typeof(x))

//js不分integer和float
//==和===是不同的，但都可以當成等於是意思
//=也是和python一樣賦值啦
//typeof找變數類別
// var b = 0.1;
// var a = 0.2;
// console.log(a+b)

//string 字串嘛
//可以用""來宣，也可以用''，``也行
//var a = `123`;
//var b = '456';

//布林值 (以及if else)
// console.log (typeof true)
// if(1===2){
//     console.log("good")
// }else{
//     console.log('not good')
// }

//null與undefined
//undefined: 宣了變數但未給值
//null: 宣了且變了值，值就是空的
// var a;
// console.log(typeof a)
// var b = null;
// console.log(b)

//運算苻 (+ - * / < > >= <=)
//基本就是python那堆
// console.log(1>2)
// var x=5;
// var y=2;
// if(x>y){
//     console.log('abc')
// }else{
//     console.log('ok')
// }

//===與==的差別
//==: 看起來一樣就是一樣，不管data類別
//===: 真的要兩個東西一樣
//parseInt: 轉類型的function?
// console.log(111 === parseInt("111"))

//要用parseInt拿到商 (除數式)
//要用%拿到餘數 (和python一樣)
//console.log(5%3)

//AND: &&
//OR: ||
//有趣的是，and也可以連着兩條式一起，會跑後面那條 (具體還在研究)
//or就是前面那條式出false就找後面那條式
//還有什麼truthy和falsy，好煩欸
//不像python
// x=5;
// y=2;
// console.log((x-y) && (y-1))
// console.log()
// console.log(true || false)

//||=是預設值的意思，沒有值就給值你，有值就不動你
// var n=20;
// n||=10
// console.log(n)

//如果?做a:做b
//三元運算式
//可以當成if else
//(1<=3)?console.log('a'):console.log('b')

//+= -= *= /= %= **都能用 (和python一樣)

//基本if flow
// var strs = "巴啦馬魯魯"
// strs==="歐趴"?console.log("帶你去歐洲玩"):console.log("禁足")
// if (strs==="歐趴"){
//     console.log("帶你去歐洲玩")
// }else if(strs==="巴魯魯"){
//     console.log('帶你去宜蘭玩')
// }else{
//     console.log("禁足")
// }

//switch怎用
//switch可以代替if else和if elseif
//如果第一個條件被苻合，其實第二第三個條件下的代碼也會一併觸發
//所以要加break
// var key= '只被當一科'
// switch (key) {
//     case '歐趴':
//         console.log('帶你去歐洲玩')
//         break
//     case '只被當一科':
//         console.log('帶你去宜蘭玩')
//         break
//     default:
//         console.log('禁足')
//         break
// }

//for loop
//for()內第一個是初始條件，第二個是運行條件，第三個是執行什麼
//i++是i加1的意思
//i--是i減1的意思
//break是跳出loop
//continue是跳過一次loop的意思 (當成出了張skip卡)
//let和var一樣
// for(let i=1;
//     i<=31;
//     i++){
//         if(i===4){
//             continue
//         }
//         console.log('第' + i + '隻綿羊')
//     }

//while loop
// let i=1;
// while (i <=100){
//     console.log('第' + i + '隻綿羊')
//     i++
// }

//do while loop
// let i = 0;
// do{
//     i++;
//     console.log('第' + i + '隻綿羊')
// }while(i<39)

//99乘法表
// for(i=1;i<10;i++){
//     for(j=1;j<10;j++){
//         console.log(i + " x " + j + " = " + i*j)
//     }
// }

//function (其實跟python很像啦)
// function awa(index){
//     for(var i=1; i<=index; i++){
//         console.log("第" + i + "隻綿羊")
//     }
// }

//表達式和陳述句
//表達式會回傳value，但是陳述句不會

//function宣告的第二種方式
//使用第二種方式來宣告function的話，在function宣告前不能用它
//但第一種方式來宣告的話，function宣告前也能用
//有宣就好
//為什麼會這樣?
//hoisting 提升
//有define function代碼在的代碼，會在電腦編譯代碼檔案時就被load進ram裏
//因此即使在define那行前使用那function，也可以用到
// var helloFunctionExpression = function(){
//     console.log('awa magic cenario')
// }
