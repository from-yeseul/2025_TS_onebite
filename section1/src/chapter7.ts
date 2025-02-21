//void : 빈
let a: void;
a = 1;
a = "hello";
a = {};
a = undefined;  //undefined만 가능


function func1():string {
    return "hello";
}
function func2():void {
    console.log("hello");   //출력값이 없을 때 void
}


//never : 존재하지 않는
let b: never;
b = 1;
b = "hello";
b = {};
b = undefined;  //undefined도 안됨
b = null;   //null도 안됨


function func3(): never {
    while (true){}  //반환값이 있을 수 없음
}
function func4(): never {
    throw new Error();  //실행시 에러
}