"use strict";
// interface EngineerBlogger extends Engineer, Blogger {
// }
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
// type NumberBoolean = number | string
// type StringNumber = boolean | string;
// type Mix = NumberBoolean & StringNumber;
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    else {
        return '';
    }
}
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
