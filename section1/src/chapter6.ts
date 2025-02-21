//any : 특정변수의 타입이 확실하지 않을 때, 런타입에러를 일으킴
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar;   //모든 타입의 변수에 할당 가능


//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if(typeof unknownVar === "number"){ //타입정제, 타입좁히기
    num = unknownVar;
}