//ts 클래스
class Emp{
    //필드
    name: string;
    age:number;
    position: string;

    //생성자
    constructor(name: string, age: number, position: string){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //메서드
    work(){
        console.log('일');
    }
}

class Exe extends Emp {
    //필드
    office: number;

    //생성자
    constructor(
        name: string,
        age: number,
        position: string,
        office: number
    ) {
        super(name, age, position);
        this.office = office;
    }
}

const empB = new Emp("홍길동", 29, "dev");
console.log(empB);

const empC: Emp = {
    name: "",
    age:0,
    position:"",
    work(){}
}