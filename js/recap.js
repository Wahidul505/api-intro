// to convert an object into stringify 
const product = {
  name: {
    favourite: 'laptop', often: 'mobile', assential: 'study table'
  },
  price: [58500, 17500, 2200],
  optional: 'ear phone'
}
console.log(product);
const productStringify = JSON.stringify(product);
console.log(productStringify);
// to convert an stringify into object 
const productParse = JSON.parse(productStringify);
console.log(productParse);

