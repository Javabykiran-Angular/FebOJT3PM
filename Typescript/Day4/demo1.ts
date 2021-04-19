//functions has 4 basic types
// 1 function  without argument & without return type
// 2 function  without argument & with return type
// 3 function with argument & without return type
// 4 function with argument & with return type

// 1 function  without argument & without return type

// add1();


function add1(){
    console.log("U r in Add1 Function");
}

// 2 function  without argument & with return type

function add2():number{
    let a1=2+2;
    return (a1)
}

var res=add2();
// console.log(`value of Result is ${res}`);

// 3 function with argument & without return type

function add3(a:number,b:number){
    console.log(`Addition is ${a+b}`);
}
// add3(4,5);

// 4 function with argument & with return type

function add4(a:number,b:number):number{
    return (a+b);
}

console.log(`Result is ==> ${add4(6,8)}`);




