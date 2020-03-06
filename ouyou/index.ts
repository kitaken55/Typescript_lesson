type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}

type EngineerBlogger = Engineer & Blogger;  //下のものと同等ではあるが、こっちのほうがスッキリ。
// interface EngineerBlogger extends Engineer, Blogger {

// }

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

// type NumberBoolean = number | string
// type StringNumber = boolean | string;
// type Mix = NumberBoolean & StringNumber;


function toUpperCase(x: string | number) {
    if(typeof x === 'string'){
        return x.toUpperCase();
    } else {
        return '';
    }
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}