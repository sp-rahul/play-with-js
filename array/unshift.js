let numbers = [2,3,4]
numbers.unshift(1)
console.log(numbers)


let number = ["a","b",4]
console.log("main array",number);
number.unshift(1)
console.log("unshift",number)


let res = number.shift()
console.log("shift",number)
console.log("shifted data",res)