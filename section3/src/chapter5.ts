// 타입추론
// 대부분의 변수는 자동으로 type추론 (const제외외)
// let이나 객체를 사용해서 범용적으로 활용하도록 하기 -> 타입 넓히기

let a = 10;
let b = "hello";
let c = {
    id:1,
    name:"이정환",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"],
};

let {id, name, profile} = c;
let [one, two, three] = [1, "hello", true];
function func(message = "hello"){
    return "hello";
}

// any타입의 진화
let d;
d = 10;
d.toFixed();    //number

d = "hello";
d.toUpperCase();    //string
// d.toFixed();
