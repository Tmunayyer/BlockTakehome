const { sortByNaive, sortByOptimized } = require("./sortBy.js");
const { test, assertArray } = require("./assert.js");

const tests = [
   {
      name: "with given inputs",
      inputOrder: ["blue", "red", "black"],
      inputData: ["red", "blue", "red", "green", "blue"],
      expected: ["blue", "blue", "red", "red"]
   },

   {
      name: "with presence of 3rd order input",
      inputOrder: ["blue", "red", "black"],
      inputData: ["red", "blue", "red", "black", "blue"],
      expected: ["blue", "blue", "red", "red", "black"]
   },

   {
      name: "with single order input",
      inputOrder: ["blue"],
      inputData: ["red", "blue", "red", "black", "blue"],
      expected: ["blue", "blue"]
   },

   {
      name: "with single data input",
      inputOrder: ["blue", "red", "black"],
      inputData: ["red"],
      expected: ["red"]
   },

   {
      name: "with only invalids",
      inputOrder: ["blue", "red", "black"],
      inputData: ["yellow", "green"],
      expected: []
   },
];

console.log("\n\r");
console.log("=== Naive Implementation");
tests.forEach(t => {
   test(t.name, () => {
      const result = sortByNaive(t.inputOrder, t.inputData);
      return assertArray(t.expected, result);
   });
});
console.log("\n\r");
console.log("=== Optimized Implementation");
tests.forEach(t => {
   test(t.name, () => {
      const result = sortByOptimized(t.inputOrder, t.inputData);
      return assertArray(t.expected, result);
   });
});
console.log("\n\r");