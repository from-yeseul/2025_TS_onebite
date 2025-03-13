//클래스
let studentA = {
    name: "홍길동",
    grade: "A+",
    age: 27,
    study(){
        console.log("good");
    },
    introduce(){
        console.log("hi");
    },
};

class Student {
    //필드
    name;
    grade;
    age;

    //생성자
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    study(){
        console.log("good");
    }
    introduce(){
        console.log(`hi, ${this.name}`);
    }
}

//상속
class StudentDev extends Student {
    Skill;
    constructor(name, grade, age, Skill){
        super(name, grade, age);    //Student의 생성자 전달
        this.Skill;
    }
    programming(){
        console.log(`${this.Skill} 프로그래밍`)
    }
}





//클래스를 이용해서 만든 객체 -> 인스턴스
let StudentDev = new StudentDev("홍길동", "A", 27, "java");
console.log(StudentDev);
// studentB.study();
// studentB.introduce();
StudentDev.programming();