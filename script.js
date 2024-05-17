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
(1<=3)?console.log('a'):console.log('b')