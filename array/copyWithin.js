const array1 = ['a', 'b', 'c', 'd', 'e','f','g'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));

const array2 = ['a', 'b', 'c', 'd', 'e','f','g'];
console.log(array2.copyWithin(1,4));
// a,e,f,g,e,f,g


let arr=[1,2,3,4]
console.log(arr.copyWithin(2));