//제네릭 인터페이스
interface KeyPair<K, V>{
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value:0,
}
let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value:["1"],
}


//인덱스 시그니처
interface NumberMap{
    [key:string]: number;
}
let NumberMap1: NumberMap = {
    key: -123,
    key2: 123,
}
interface Map<V>{
    [key:string]:V;
}
let stringMap:Map<string> = {
    key: "value",
};
let booleanMap: Map<boolean> = {
    key: true,
}

//제네릭 타입별칭
type Map2<V> = {
    [key:string]: V;
}
let stringMap2 : Map2<string> = {
    key: "hello",
}


//제네릭 인터페이스 활용
interface Student {
    type: "student";
    school: string;
}
interface Dev {
    type: "dev";
    skill: string;
}
interface User<T>{
    name: string;
    profile: T
}

function goSchool(user: User<Student>){
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const devUser: User<Dev>={
    name:"홍길동",
    profile:{
        type: "dev",
        skill: "typescript",
    },
}
const studentUser: User<Student>={
    name:"김길동",
    profile:{
        type: "student",
        school: "대학교",
    }2
}