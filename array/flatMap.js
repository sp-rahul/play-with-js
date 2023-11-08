const arr1 = [1, 2, 1,3,2];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2,4,5] : 100));

console.log(result);