"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function copy<T extends { name: string }>(value: T): T {
//     return value;
// }
// console.log(copy({ name: 'Quill'}));
// function copy2<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
//     const returnValue = value[key];
//     console.log(returnValue, "これなんだ");
//     return value;
// }
// console.log(typeof copy2({ name: 'Quill', hoge: 38  }, 'hoge'), "ここ");
// ①copy2の第一引数はstring
// class LightDatabase<T extends string | number | boolean>  {
//     private data: T[] = [];
//     add(item: T) {
//         this.data.push(item);
//     }
//     remove(item: T) {
//         this.data.splice(this.data.indexOf(item), 1)
//     }
//     get() {
//         return this.data;
//     }
// }
// const stringLightDatabase = new LightDatabase<string>();
// stringLightDatabase.add('Apple');
// stringLightDatabase.add('Banana');
// stringLightDatabase.add('Grape');
// stringLightDatabase.remove('Banana');
// console.log(stringLightDatabase.get());
// interface TmpDatabase<T> {
//     id: number;
//     data: string[];
// }
// const tmpDatamase: TmpDatabase<string> = {
//     id: 3,
//     data: ["aaa", "iii"]
// }
// interface Todo {
//     title: string;
//     text: string;
// }
// type Todoable = Partial<Todo>
// type ReadTodo = Readonly<Todo>
// const fetchData: Promise<string> = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello');
//     }, 3000);
// })
// fetchData.then(data => {
//     data.toUpperCase();
// })
// const vegetables: Array<string> = ['Tomato', 'broccoli', 'Asparagus'];
// interface ResponseData<T extends { message: string } = any> {
//     data: T;
//     status: number
// }
// let tmp2: ResponseData;
// interface Vegetables {
//     tomato: string;
//     pumpkin: string;
// }
// type MappedTypes = {
//     readonly [P in keyof Vegetables]?:string
// }
