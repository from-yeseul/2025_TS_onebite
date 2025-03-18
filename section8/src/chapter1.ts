//인덱스드 엑세스

interface Post {
    title: string;
    content: string;
    author:{
        id: string;
        name: string;
        age: number;
        location: string;
    };
}
function printAuthor(author: Post["author"]){
    console.log(`${author.name} - ${author.id}`)
}

const post: Post = {
    title: "제목",
    content:"본문",
    author:{
        id: "아이디",
        name: "이름",
        age: 30,
        location: "장소",
    }
}