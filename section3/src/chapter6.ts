// 타입단언 (type assertion)
type Person = {
    name: string;
    age: number;
}
let person = {} as Person;  //타입단언
person.name = "이정환";
person.age = 27;



type Dog = {
    name: string;
    color: string;
}
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;


// 타입단언의 규칙
// 단언식: 값 as 단언
// A as B
// A가 B의 슈퍼타입/서브타입이여야 함
let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; 교집합이 없음
// let num3 = 10 as unknown as string; 이렇게 단언을 할 수는 있음 (권장x)


// const 단언
let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "white",
} as const;
//  cat.name = '';


// Non null 단언
type Post = {
    title: string;
    author?: string;
}
let post: Post = {
    title: "게시글1",
    author: "이정환",
};

// const len: number = post.author?.length; ?은 undefined이 될수도 있어서 x
const len: number = post.author!.length;