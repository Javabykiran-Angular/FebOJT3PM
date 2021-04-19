//Anynoumous function

var temp1=function (){
    console.log("U are in Anonymous Function..")
}

// temp1();

//4 funct. with argument & with return type

var temp2=function (a:number,b:number):number{
    return (a+b);
}

var res=temp2(8,4);
// console.log("Res is "+res);

//Fat arrow function/Arrow function

  var temp3= ()=>{
        console.log("U are in Fat arrow function...")
    }

    // temp3();

//4 funct. with argument & with return type

  var temp4=(a:number,b:number):number=>{
        return (a+b);
    }

// console.log('Output is --- '+temp4(3,6));

//Optional Parameter Function
function add1(a:number,b?:number){
    console.log("Value of a is "+a); //5
    console.log("Value of b is "+b);  // undefined
    console.log("Value of a+b is "+(a+b)); // NAN=> Not a number
}

// add1(5);

function add2(a?:number,b?:number){
    console.log("Value of a is "+a); //5
    console.log("Value of b is "+b);  // undefined
    console.log("Value of a+b is "+(a+b)); // NAN=> Not a number
}
// add2();
// add2(2);
// add2(3,4);

//Default parameter Function
function add3(a:number,b:number=2){
    console.log("Value of a is "+a); //5
    console.log("Value of b is "+b);  // undefined
    console.log("Value of a+b is "+(a+b)); // NAN=> Not a number
}

// add3(10);
// add3(2,8);

function add4(a:number=1,b:number=2){
    console.log("Value of a is "+a); //5
    console.log("Value of b is "+b);  // undefined
    console.log("Value of a+b is "+(a+b)); // NAN=> Not a number
}

// add4();

function add5(a:number=1,b:number){
    console.log("Value of a is "+a); //5
    console.log("Value of b is "+b);  // undefined
    console.log("Value of a+b is "+(a+b)); // NAN=> Not a number
}

add5(4,3)






