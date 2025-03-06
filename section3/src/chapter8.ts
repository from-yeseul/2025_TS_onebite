// 서로소 유니온 타입
// : 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
}
type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
}
type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
}
type User = Admin | Member | Guest;


// function login(user:User){
//     if('kickCount' in user){
//         //admin 타입
//         user;
//     }else if('point' in user){
//         //member 타입
//         user;
//     }else{
//         //guest 타입
//         user;
//     }
// }

function login(user:User){
    switch(user.tag){
        case "ADMIN": {
            console.log("admin");
            break;
        }
        case "MEMBER": {
            console.log("member");
            break;
        }
        case "GUEST": {
            console.log("guest");
            break;
        }
    }
}


// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
    state:"LOADING";
}
type FailedTask = {
    state:"FAILED";
    error: {
        message: string; 
    }
}
type SuccessTask = {
    state:"SUCCESS";
    response: {
        data: string;
    };
};
// type AsynTask = {
//     state: "LOADING"| "FAILED"| "SUCCESS";
//     error?:{
//         message: string;
//     };
//     response?:{
//         data: string;
//     };
// };
type AsynTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsynTask){
    switch (task.state){
        case "LOADING": {
            console.log("로딩중");
            break;
        }
        case "FAILED": {
            console.log(`에러발생: ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`에러발생: ${task.response.data}`);
            break;
        }
    }
}