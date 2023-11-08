const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

for (const element of [, "a",'',,100].entries()) {
    console.log(element);
  }

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for(let x of f){
    console.log(x);
}
for(let [index, data] of f){
    console.log(index,data);
}