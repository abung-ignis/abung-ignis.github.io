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

//function的scope
//function裏的variable是只限於function內的 (local)
//如果在function裏用到出面宣告了的variable但你沒給他套var之類的宣告字眼
//那個本來在出面的variable也會被你function裏的code更改掉值
// var a = 100;
// function helloWorld(){
//     var a = 150;
// }
// helloWorld()
// console.log(a)

//global variable & local variable
//宣告variable有三種宣告方式
//可以用var、let或const來宣告
//在function裏以上三種來宣告變數變local (只在function裏變)
//在code裏直接用那三種來宣變數變global (不用講都知道是什麼吧)
//可以在chrome console裏用window.(變數名稱) 看到某variable的值
//啊對，window是根物件，就是代表網頁的整個物件
//在function裏三種宣告都不用的話，他就單純是全域的屬性
// var awa = 10;
// function ale(){
//     var x = 1;
//     z = 1;
// }

//callback function 回呼函數
//函數也可以當另一個函數裏的參數來用!
//目前覺得有點莫名其妙的功能
// function heyFunc(myFunction){
//     myFunction("Hi!!!")
// }
// heyFunc(alert)

//匿名函數
//有夠神奇的東西，本來把一個函數塞到另一個函數裏做參數已經夠神奇了
//原來還可以把函數的名稱匿起來，繞一圈來執行函數 (???
//我是真不懂
// function heyFunc(myFunction){
//     myFunction("Hi!!!")
// }
// heyFunc(function(message){
//     console.log('message is:', message)
// })

//函數可以回傳函數，那麼就可以就做 立即函數 IIFE了
//為什麼這樣用? 不想要讓以後寫的程式有機會污染到這些代碼用的變數
// var sayHi = function(name){
//     var strs = "Hi, " + name + " !"
//     console.log(strs)
// }("Peter");

//hoisting 變數提升
//不管在哪行用了變數，都視為在第一行宣告
//var做到hoisting，但let不行
// console.log(x);
// var x = 10;
// console.log(x);

// console.log(y);
// let y = 10;
// console.log(y);

// console.log(x) <- undefined
// var x = 10; 
// console.log(x); <- x=10
// function sayHello(){
//     console.log(x); <- undefined (function內自帶一層提升)
//     var x = 20;
//     console.log(x); <- x=20
// }
// sayHello()

//not defined和undefined
//not defined是調用一個完全沒出現過的變數的時候出現的
//undefined是調用一個已經宣告了「它存在」的變數但沒給值的時候出現的
//下面這種形式是可以的
//因為變數的宣告「存不存在」有hoist到
// x = 20;
// var x;
// console.log(x)

//js object
//this是指物件本身
// var a = {
//     key: ['Bob', 'Smith'],
//     age: 32,
//     gender: "male",
//     interests: ['music','skiing'],
//     greeting: function(){
//         console.log('Hi! I\'m '+ this.name[0] + ".")
//     }
// }

//js中的資料類別
//基本類別:
//- 數字
//- 字串
//- 布林
//- 空值
//- 未定義
//- 苻號 (未教呢)

//更多物件示範
// var dog = {
//     name: "Tracy",
//     age: 20,
//     bow: function(){
//         console.log('bow bow')
//     }
// }
// console.log(dog.name)
// dog.bow()

//這個同樣能印東西出來喔! (用下面這形式就和python的dictionary差不多)
// console.log(dog['name'])

// dog.color = 'white';
// dog["size"] = "small";
// console.log(dog)

//陣列 array (同樣以0作第一個物品)
//基本和python一樣 (但len在js是陣列的一種屬性)
//pop就是移除一個元素
//push是js版的append
var arr = ['awa',154,'asta']
for (i=0;i<=arr.length;i++){
    console.log(arr[i])
}
arr.pop(154)
console.log(arr)
arr.push("cat")
arr.push("cat")
console.log(arr)