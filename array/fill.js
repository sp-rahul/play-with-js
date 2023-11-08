// fill(value)
// fill(value, start)
// fill(value, start, end)



const array1 = [1, 2, 3, 4];
console.log(array1.fill(0, 2, 3));

console.log(array1.fill(5, 1));

console.log(array1.fill(6));

console.log(array1.fill('Ruhul'));

console.log(array1.fill());

let arry = ["JavaScript", "Fill", "this", "Array"];
arry.fill("Filled", 1, 3);

console.log(arry);
const filler ={
    "name": "Ruhul",
    "age": 27
}
const brr=[1,2,3,4,5,6,7,8]
console.log(brr.fill(filler, 2, 5));
