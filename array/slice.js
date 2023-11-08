const myArray = [10, 20, 30, 40, 50, 60,70,80,90,100];
// Slice from index 1 to 4 (exclusive)
const mySlice = myArray.slice(1, 4);
console.log(mySlice);  
console.log(myArray);

const slice1 = myArray.slice(2)
console.log("slice1 from 3", slice1);
console.log("slice1 lenth", slice1.length);


const copy = myArray.slice();
console.log("copy", copy);

console.log("check same or not", myArray == copy);
// false as their reference is not same

const slice3= myArray.slice(-3)
console.log("negative slice (from last 3 slice)",slice3);


// Slice with a step of 2 (select every second element)
const mySlice4 = myArray.slice(1, 7,2);
console.log("slice by 2 after",mySlice4);
