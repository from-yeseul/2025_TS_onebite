//인터페이스
interface Person {
    // readonly name: string;
    name: string;
    age?: number;
    sayHi():void;
}
type Func ={  
    ():void;
}
const func: Func = () => {};

const person: Person = {
    name:"이정환",
    sayHi:function (){
        console.log("Hi");
    },
};
person.name="홍길동";