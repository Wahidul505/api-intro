console.log('API connected');
const mySelf = {
  name: 'Wahidul Alam', studing: 'web developement', age: 23, isMarried: false,
  goodAt: ['drawing', 'art', 'programming'],
  toDo: {
    study: 'home work', personal: 'take rest', diet: 'dinner'
  }
}
// console.log(mySelf);
// to convert an object into stringify 
const mySelfStringify = JSON.stringify(mySelf);
console.log(mySelfStringify);
// to convert an stringify into object
const mySelfParse = JSON.parse(mySelfStringify);
console.log(mySelfParse);
