// 객체타입간의 호환성
// : 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;  //추가 프로퍼티티
};

let animal: Animal = {
    name:"기린",
    color: "red",
}

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
}

animal = dog;

// dog = animal;