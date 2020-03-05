"use strict";
let hasValue = true;
let count = 10;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
hello = 'sss';
const person = {
    name: 'Jack',
    age: 12
};
const fruits = ['apple', 'banana', 'grape'];
// fruits.push(2); //エラー検出してくれる。
// fruits.reduce(); //エラー検出してくれる。
const book = ['business', 1500, false];
// 19. Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
var CoffeeSise;
(function (CoffeeSise) {
    CoffeeSise[CoffeeSise["SHORT"] = 0] = "SHORT";
    CoffeeSise[CoffeeSise["TALL"] = 1] = "TALL";
    CoffeeSise[CoffeeSise["GRANDE"] = 2] = "GRANDE";
    CoffeeSise[CoffeeSise["VENTI"] = 3] = "VENTI";
})(CoffeeSise || (CoffeeSise = {}));
const coffee = {
    hot: true,
    size: CoffeeSise.TALL
};
coffee.size = CoffeeSise.SHORT;
let unionType = 10;
let unionTypes = [21, 'hello'];
const apple = 'apple';
//リテラル型は複数することで、enumに近いことが可能。以下はsmallかmediumかlargeの3種類しか選べない。
let clothSize = 'small';
add(3, 2);
function sayHello() {
    console.log("a");
    return;
}
console.log(sayHello());
let tmp;
function add(num1, num2) {
    return num1 + num2;
}
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = number => number * 2;
//第一引数にnumber型, 第ニ引数にnumberを引数に持ったnumberが返り値の関数が入る
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
anyInput = 'hello';
text = anyInput;
function error(message) {
    throw new Error(message);
}
