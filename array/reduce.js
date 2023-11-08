const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 10;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);

const sumWithInitial2 = array1.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);

console.log(sumWithInitial2);

const array3 = [
    [0, 1, '88'],
    [2, 3],
    [4, 5],
  ];
  
  const result = array3.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
  
  console.log(result);