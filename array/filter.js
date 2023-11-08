
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result)

const number = [1,5,2,5,6,10,3,22,88,99]
const newNum = number.filter(num=> num%2)
console.log(newNum);

function isBigEnough(value) {
    return value >= 10;
  }

  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
  console.log(filtered);


  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); 