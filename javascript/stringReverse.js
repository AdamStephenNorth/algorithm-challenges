const str = "Hello, I am long string!";

// The obvious way, via method chaining
const stringReverse = (s) => s.split("")
                              .reverse()
                              .join("");

// A more procedural approach
// function stringReverse(s) {
//   let reversedString = "";
//     for (let i=0; i < s.length; i++) {
//       reversedString += s[(s.length - i - 1)];
//   }
//   return reversedString;
// }

console.log(stringReverse(str));
