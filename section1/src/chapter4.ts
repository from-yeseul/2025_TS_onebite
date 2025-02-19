//타입 별칭
type User1 = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};
let user: User1 = { //타입별칭 사용
    id:1,
    name:"김영희",
    nickname:"aa",
    birth: "1997.01.01",
    bio: "안녕",
    location:"서울시",
}


//인덱스 시그니처
type CountryCodes = {
    [key:string]: string;
}
let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumCodes = {
    [key:string]: number;
    Korea: number;  //두 value 타입이 일치해야함
}
let countryNumCodes:CountryNumCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}