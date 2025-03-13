//인터페이스 확장
interface Animal{
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}
interface Cat extends Animal {
    isScratch: boolean;
}
//다중 확장
interface DogCat extends Dog, Cat {}

const dogCat : DogCat = {
    name:"",
    color:"",
    isBark:true,
    isScratch: true,
};