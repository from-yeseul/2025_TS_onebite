//맵드타입
interface User{
    id: number;
    name: string;
    age: number;
}
type PartialUser ={
    //하나의 객체타입으로 대처 가능
    [key in "id"|"name"|"age"]?: User[key];
}
type BooleanUser = {
    [key in keyof User]: boolean;
}
type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}


//한명의 유저 정보를불러오는 기능
function fetchUser(): User{

}

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser){
    //수정기능
}
updateUser({
    // id:1,
    // name:"이정환",
    age: 25,
})