
var a:number[]=[2,4,5,6,7,8];
var a1=[11,1,2,34,5,6];
var a2:number[]=[];
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// console.log("Array is "+a);
// console.log("Print Array using join method "+a.join('  '));
// console.log("Print Array using join method "+a.join(' # '));


// a1.forEach((myvalue)=>{
//         console.log('My value is '+myvalue);
// })

// a1.forEach((myvalue,index)=>{

//     console.log('My value is '+myvalue+" Index is "+index);
// })

var a3:number[]=[];
//you can insert value in 2 ways
//1 push & pop method => that works on LIFO=>Last in First out
//2 Splice method

// 1 way push & pop method
// a3.push(45);
// console.log(a3);
// a3.push(12);
// console.log(a3);
// a3.push(11,20.21,25);
// console.log(a3);
// var popedVal=a3.pop();
// console.log(a3);
// console.log("Poped value is "+popedVal);

//2 Splice method

var a4:number[]=[10,12];
console.log(a4);
a4.splice(1,0,25);
console.log(a4);
a4.splice(2,0,27);
console.log(a4);
a4.splice(1,1);
console.log(a4);
a4.splice(2,1,55)
console.log(a4);
a4.splice(1,0,21,45,78);
console.log(a4);
a4.splice(3,2);
console.log(a4);







