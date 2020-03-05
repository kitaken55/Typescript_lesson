"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Hello = /** @class */ (function () {
    //省略した書き方
    function Hello(name, age) {
        this.name = name;
        this.age = age;
        Hello.species;
    }
    Hello.isAdult = function (age) {
        if (age > 17)
            return true;
    };
    Hello.prototype.greeting = function () {
        console.log("hello " + this.name + ". " + this.age);
        this.explainJob();
    };
    Hello.prototype.incrementAge = function () {
        Hello.species;
        this.age += 1;
    };
    Hello.species = 'ホモサピエンス';
    return Hello;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("i am a teacher. i teach " + this.subject);
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error('there is no subject.');
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error('there is no subject.');
            }
            this._subject = value;
        },
        enumerable: true,
        configurable: true
    });
    return Teacher;
}(Hello));
var teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();
