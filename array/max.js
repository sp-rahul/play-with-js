
 
 //1
 const num2 = [1, 7, 2, 100,-7, 88, 11, 50];
 let maxi = Math.max(...num2);

 console.log("maximum",maxi);
 console.log(num2)
 console.log(...num2)
 
//2
 const result = num2.reduce((a,b)=>
     Math.max(a,b),-Infinity
 )
 console.log("maximum", result)


//3
 function getMaxOfArray(arr){
    return Math.max.apply(null, arr)
 }
 let arr = [ 5, 1,-33, 500,99]
 let res= getMaxOfArray(arr)
 console.log("Max result", res);


