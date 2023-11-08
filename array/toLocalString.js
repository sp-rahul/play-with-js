const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
console.log("to local",array1)
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

const array2 = [1, 'a', new Date()];
console.log("to local",array2)
const localeString2 = array2.toLocaleString('bn', { timeZone: 'GMT' });

console.log(localeString2);
