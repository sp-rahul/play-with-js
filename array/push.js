let a=[1,2,3]
a.push(4,5)
console.log("1st -->",a)


let ab=[1,2,3]
let b=[4,5,6]
ab.push(b)
console.log("2nd -->",ab)

let abc=[1,2,3]
abc.push(...b)
console.log("3nd -->",ab)

const fruits = [];
fruits.push("banana", "apple", "peach");
fruits[5]="Amm"
console.log(fruits.length);
console.log("fruits",fruits);
console.log("fruits",fruits[5]);

const LEN = 3;
const arry = [];
const filler ={
    "name": "Ruhul",
    "age": 27
}
for (let i = 0; i < LEN; i++) {
    arry.push(filler);
}

console.log(arry);