//함수 타입 정의
function func(a:number, b:number){
    return a+b;
}

//회살표함수 타입 정의
const add = (a:number,b:number) => a+b;

//함수의 매개변수
function intro(name="김영희", age: number, tall?:number){
    console.log(`name: ${name}`);
    if(typeof tall === "number"){
        console.log(`tall: ${tall}`);
    }
}
intro("이철수", 27, 175);
intro("이철수", 27);


function getSum(...rest: number[]){
    let sum = 0;
    rest.forEach((it)=> (sum += it));

    return sum;
}
getSum(1,2,3);
getSum(1,2,3,4,5);