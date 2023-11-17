///zadaca 1
// A

// var fruits = ["kiwi", "plum", "mango"];

// console.log("Second element of fruits array:", fruits[1]);
// fruits.push("ananas");

//  B

// var person = {
//   name: "Your Name",
//   age: 25,
//   city: "Your City",
// };

// console.log("City:", person.city);

// person.age = 26;
namerna proba za 

// console.log("Fruits:", fruits);
// console.log("Person:", person);

/// zadaca 2
// A

// console.log("Numbers from 0 to 10:");
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// B
// let start = 5;
// let end = 10;
// let sumEven = 0;
// console.log("Sum of even numbers from start to end:");

// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   }
// }

// console.log("Sum of even numbers:", sumEven);

// V
// let person = {
//   name: "Roko",
//   age: 33, // Replace with your actual age
//   city: "Gotham City",
// };
// console.log(" Person Object Properties:");

// for (let property in person) {
//   console.log(`${property}: ${person[property]}`);
// }
// G

// let colors = ["white", "yellow", "marineblue"];
// console.log("Colors and Number of Characters:");

// for (let color of colors) {
//   console.log(`${color.length} ${color}`);
// }

// 3 zadaca

// var count = 5;

// while (count >= 1) {
//   console.log(count);
//   count--;
// }

// var count = 10;

// do {
//   console.log(count);
//   count--;
// } while (count >= 1 && count !== 5);

/// 4 zadaca

function multiply(a, b) {
  let result = 0;
  result = a * b;
  return result;
}

let divide = function (a, b) {
  let result = 0;
  result = a / b;
  return result;
};

let subtract = (a, b) => {
  let result = 0;
  result = a - b;
  return result;
};

console.log("Multiply:", multiply(5, 3));
console.log("Divide:", divide(10, 2));
console.log("Subtract:", subtract(8, 4));
