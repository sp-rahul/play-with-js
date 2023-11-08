
const num2 = [1, 7, 2, 100,-7, 88, 11, 50];
let mini = Math.min(...num2);

console.log("minimum",mini);
console.log(num2)
console.log(...num2)


let minResult = num2.reduce((ac, cur)=>Math.min(ac,cur), Infinity)
console.log("minimum", minResult)


