function Logging(message: string) {
    return function (constructor: Function) { //デコレータは無名関数になり、ゲッター的に使える。
        console.log('Logging...');
        console.log(constructor);
    }
}



@Logging('Logging User')  //クラス全体にデコレーションすることもできるし、部分的にすることもできる。それは引数に指定する↑
class User {
    name = 'Quill';
    constructor() {
        console.log('User was created!');
    }
}