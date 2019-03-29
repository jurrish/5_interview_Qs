//1) add something to the end of the array
// 2) put something at the beginning of an arrray
//es5 and es6 versions

var myArray = ['a', 'b', 'c', 'd', 'e'];

//add to end of array - modifies array in place.
myArray.push('end');

//add something to beginning of the array
myArray.unshift('beginning');


console.log(myArray);

//es6 versions

//add to end of array in es6
//spread operator
let newArray = [...myArray, 'newEnd'];
let editFrontArray = ['newStart', ...myArray];

let spreadFrontToBack = ['newestNewStart', ...myArray, 'newestNewEnd'];

console.log(newArray);
console.log(editFrontArray);
console.log(spreadFrontToBack);
