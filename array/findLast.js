const array1 = [5, 8, 130, 44];

const found = array1.findLast((element) => element > 10);

console.log(found);


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
  
  console.log(inventory.findLast(isCherries));

  const result = inventory.findLast(({ name }) => name === "cherries");

console.log(result);