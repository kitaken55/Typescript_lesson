let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`
let hello: string;
hello = 'sss';


const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 12
}

const fruits: string[] = ['apple', 'banana', 'grape']
// fruits.push(2); //エラー検出してくれる。
// fruits.reduce(); //エラー検出してくれる。

const book: [string, number, boolean] = ['business', 1500, false];



// 19. Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
enum CoffeeSise {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}

const coffee = {
    hot: true,
    size: CoffeeSise.TALL
}

coffee.size = CoffeeSise.SHORT;


let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];



const apple: 'apple' = 'apple';
//リテラル型は複数することで、enumに近いことが可能。以下はsmallかmediumかlargeの3種類しか選べない。
let clothSize: 'small' | 'medium' | 'large' = 'small';

type ClothSize = 'small' | 'medium' | 'large';

add(3, 2);






function sayHello(): void {
    console.log("a");
    return;
}

console.log(sayHello());
let tmp;



function add(num1: number, num2: number) {
    return num1 + num2
}

const anotherAdd: (n1: number, n2: number) => number = function(num1: number, num2: number) {
    return num1 + num2
};

const doubleNumber = number => number * 2;



//第一引数にnumber型, 第ニ引数にnumberを引数に持ったnumberが返り値の関数が入る
function doubleAndHandle(num: number, cb: (num:number) => number):void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum
});


let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
anyInput = 'hello';
text = anyInput;


function error(message: string) {
    throw new Error(message);
}