const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"


// Our array with items
const cart = ["apple", "banana", "pear"];

function returnLast(arr) {
  return arr.at(-1);
}
const item1 = returnLast(cart);
console.log(item1); // 'pear'

cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'

let arr=[1,2,3,4]
console.log("at",arr.at(1))