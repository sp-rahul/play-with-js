const array = [1, 2, 3, 4, 5];

const even = (element) => {return element % 2 === 0};

console.log("even",array.every(even));


const odd = (element) =>  element % 2 === 0;

console.log("odd",array.every(odd));


const names = ["ruhul", "Amin","khan","Mia"]
console.log("length",names.every(data => data.length>2));