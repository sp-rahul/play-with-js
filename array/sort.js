const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("sorted", fruits);
fruits.reverse(fruits);
console.log("reversed",fruits);

const fruit = ["Banana", "Orange", "Apple", "Mango","banana", "orange", "apple", "mango"];
fruit.sort();
console.log("sorted", fruit);
fruit.reverse(fruit);
console.log("reversed",fruit);

const a = ["B", "O", "A", "M","b", "o", "A", "m"];
a.sort();
console.log("sorted", a);
a.reverse();
console.log("reversed",a);

const num = [1, 7, 2, 100,-7, 88, 11, 50];
num.sort((a,b)=>[a-b]);
console.log("sorted", num);
num.reverse();
console.log("reversed",num);

const num1 = [1, 7, 2, 100,-7, 88, 11, 50];
num1.sort(function(a,b){return a-b});
console.log("sorted 1", num1);
num1.reverse();
console.log("reversed 1",num1);


function change(a,b){
   return a-b;
}
const num2 = [1, 7, 2, 100,-7, 88, 11, 50];
num2.sort(change);
console.log("sorted 2", num2);
num2.reverse();
console.log("reversed 2",num2);