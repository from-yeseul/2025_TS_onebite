//조건부타입
type A = number extends string ? string : number;
type ObjA = {
    a: number;
}
type ObjB = {
    a: number;
    b: number;
}
type B = ObjB extends ObjA ? number : string;



//제네릭과 조건부 타입
type Switch<T> = T extends number? string : number;
let varA : Switch<number>;
let varB : Switch<string>;

function removeSpace<T>(text:T): T extends string ? string : undefined;
function removeSpace(text: any){
    if(typeof text === "string"){
        return text.replaceAll("","");
    }else{
        return undefined;
    }
}
let result = removeSpace("hi");
result.toUpperCase();
let result2 = removeSpace(undefined);