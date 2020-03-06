"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hello {
    //省略した書き方
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Hello.species;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
    }
    greeting() {
        console.log(`hello ${this.name}. ${this.age}`);
        this.explainJob();
    }
    incrementAge() {
        Hello.species;
        this.age += 1;
    }
}
Hello.species = 'ホモサピエンス';
class Teacher extends Hello {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`i am a teacher. i teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('there is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('there is no subject.');
        }
        this._subject = value;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance(); //同じ結果
const teacher2 = Teacher.getInstance(); //同じ結果
