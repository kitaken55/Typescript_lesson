var hasValue = true;
var count = 10;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'sss';
var person = {
    name: 'Jack',
    age: 12
};
var fruits = ['apple', 'banana', 'grape'];
// fruits.push(2); //エラー検出してくれる。
// fruits.reduce(); //エラー検出してくれる。
var book = ['business', 1500, false];
// 19. Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
var CoffeeSise;
(function (CoffeeSise) {
    CoffeeSise[CoffeeSise["SHORT"] = 0] = "SHORT";
    CoffeeSise[CoffeeSise["TALL"] = 1] = "TALL";
    CoffeeSise[CoffeeSise["GRANDE"] = 2] = "GRANDE";
    CoffeeSise[CoffeeSise["VENTI"] = 3] = "VENTI";
})(CoffeeSise || (CoffeeSise = {}));
var coffee = {
    hot: true,
    size: CoffeeSise.TALL
};
coffee.size = CoffeeSise.SHORT;
var unionType = 10;
var unionTypes = [21, 'hello'];
var apple = 'apple';
//リテラル型は複数することで、enumに近いことが可能。以下はsmallかmediumかlargeの3種類しか選べない。
var clothSize = 'small';
add(3, 2);
function sayHello() {
    console.log("a");
    return;
}
console.log(sayHello());
var tmp;
function add(num1, num2) {
    return num1 + num2;
}
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (number) { return number * 2; };
//第一引数にnumber型, 第ニ引数にnumberを引数に持ったnumberが返り値の関数が入る
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
anyInput = 'hello';
text = anyInput;
function error(message) {
    throw new Error(message);
}
