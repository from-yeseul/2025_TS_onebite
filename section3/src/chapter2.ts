// unknown 타입
function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;    
}

// never 타입
function neverExam(){
    function neverFunc(): never {
        while (true) {}
    }
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}

// void 타입
function voidExam(){
    function voidFunc(): void {
        console.log("hi");
    }
    let voidVar: void = undefined;  //업캐스팅
}

//any 타입 (사용권장x)
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;

    undefinedVar = anyVar;

    //neverVar = anyVar;
}