var Developer = /** @class */ (function () {
    function Developer(name, age) {
        this.name = name;
        this.age = age;
    }
    Developer.prototype.greeting = function (message) {
        console.log('Hello!');
    };
    return Developer;
}());
