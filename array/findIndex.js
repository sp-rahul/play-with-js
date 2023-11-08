const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
const isPrime=(elemet)=>{
   let start=2
   while(start<=Math.sqrt(elemet)){
    if(elemet%start++ ===0){
        return false
    }

   }
   return elemet>1
}
console.log(array1.findIndex(isPrime))