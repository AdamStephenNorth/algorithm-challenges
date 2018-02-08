// Using functional programming and recursion
const factorialize = (n) => (n === 0) ? 1 : n * factorialize(n - 1);

// Without recursion
// const factorialize = (n) => Array(n).fill(1)
//                                     .map((_,i)=>i + 1)
//                                     .reduce((p,c)=>p * c,1);

// The procedural approach using recursion
// function factorialize(n) {
//   if (n === 0) return 1;
//   return n * factorialize(n - 1);
// }

// A procedural approach without recursion
// function factorialize(n) {
//   if (n === 0) return 1;
//   let product = 1;
//   for (let i = 1; i < n + 1; i++) {
//     product *= i;
//   }
//   return product;
// }
