var a1 = [1, 2, 3, 4, 5, 6, 7];
//slice=> It copied a data from a particular location to mentioned end lication
var temp = a1.slice(1, 4);
// console.log("Original data "+a1);
// console.log("Copied data "+temp);
//map
var a2 = [2, 3, 4, 5];
var res = a2.map(function (value) {
    return (value * value);
});
// console.log("Original data "+a2);
// console.log("Square data "+res);
//tuple
var a3 = [12, 'Sumit Raokhande', true, 20.52, 'Developer'];
console.log(a3);
