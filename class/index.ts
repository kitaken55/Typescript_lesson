import { timingSafeEqual } from "crypto";


abstract class Hello {
    static species = 'ホモサピエンス';
    static isAdult(age: number) {
        if (age > 17) return true;
    }
    //省略した書き方
    constructor(public name: string, protected age: number) {
        Hello.species;
    }

    greeting(this: Hello) {
        console.log(`hello ${this.name}. ${this.age}`);
        this.explainJob();
    }
    incrementAge() {
        Hello.species
        this.age += 1
    }
    abstract explainJob() :void
}


class Teacher extends Hello {
    private static instance: Teacher;
    explainJob() {
        console.log(`i am a teacher. i teach ${this.subject}`)
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
    private constructor(name: string, age: number, public _subject: string) {
        super(name, age);
    }
    static getInstance() {
        if(Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}

const teacher = Teacher.getInstance(); //同じ結果
const teacher2 = Teacher.getInstance();  //同じ結果
