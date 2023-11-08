const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => {return element % 2 === 0};

console.log("even",array.some(even));
// Expected output: true

const odd = (element) =>  element % 2 === 0;

console.log("odd",array.some(odd));

const names = ["ruhul", "Amin","khan","Mia"]
console.log("length",names.some(data => data.length>2));