const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger66'));const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    6: 2,
    3: 5, // ignored by lastIndexOf() since length is 3
  };
  console.log(Array.prototype.lastIndexOf.call(arrayLike, 2));
  // 2
  console.log(Array.prototype.lastIndexOf.call(arrayLike, 5));