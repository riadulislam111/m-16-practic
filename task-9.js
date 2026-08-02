// ES5 — refactor this fully to ES6:
const refactorToES6 = (items) =>{
  let total = items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
//   for (let i = 0; i < items.length; i++) {
//     items.reduce(key , value)
//   }
  return `Total: ${total} Taka`;
};

console.log(refactorToES6([{price:100},{price:250}]));
console.log(refactorToES6([{price:80}]));