//Anynoumous function
var temp1 = function () {
    console.log("U are in Anonymous Function..");
};
// temp1();
//4 funct. with argument & with return type
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(8, 4);
// console.log("Res is "+res);
//Fat arrow function/Arrow function
var temp3 = function () {
    console.log("U are in Fat arrow function...");
};
// temp3();
//4 funct. with argument & with return type
var temp4 = function (a, b) {
    return (a + b);
};
// console.log('Output is --- '+temp4(3,6));
//Optional Parameter Function
function add1(a, b) {
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); // NAN=> Not a number
}
// add1(5);
function add2(a, b) {
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); // NAN=> Not a number
}
// add2();
// add2(2);
// add2(3,4);
//Default parameter Function
function add3(a, b) {
    if (b === void 0) { b = 2; }
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); // NAN=> Not a number
}
// add3(10);
// add3(2,8);
function add4(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); // NAN=> Not a number
}
// add4();
function add5(a, b) {
    if (a === void 0) { a = 1; }
    console.log("Value of a is " + a); //5
    console.log("Value of b is " + b); // undefined
    console.log("Value of a+b is " + (a + b)); // NAN=> Not a number
}
add5(4, 3);
