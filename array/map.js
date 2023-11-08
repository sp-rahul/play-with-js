const arr =[1,2,3,4,5,6];
const brr = arr.map(( item ) =>  item * 2)
console.log(brr)
console.log(arr)


const name = "Sammy"

const newName = Array.prototype.map.call(name, eachLetter => {
    return `${eachLetter}=a`
})
console.log(newName)