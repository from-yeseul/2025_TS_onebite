//object
//구조적 타입 시스템
let user:{
    id?:number; //선택적(optional) property
    name:string;
} = {
    id:1,
    name: "이정환",
};

user.id;


let config:{
    readonly apiKey: string; //읽기전용 속성, 재할당x
}={
    apiKey: "MY API KEY",
};
//config.apiKey = 'hacked';