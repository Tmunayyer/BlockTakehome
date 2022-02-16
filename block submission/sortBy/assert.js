
function test(name, callback) {
   const result = callback();

   if (typeof result !== "boolean") {
      console.log("Test Failed: ", name);
      console.log("\tTest did not return a boolean.");
      return;
   }

   if (result) {
      console.log("Test Passed: ", name);
      return;
   }

   console.log("Test Failed: ", name);
}

function assert(expected, actual) {
   return expected === actual;
}

function assertArray(expected, actual) {
   if (expected.length !== actual.length) {
      return false;
   }

   const invalids = expected.filter((exp, index) => {
      const act = actual[index];

      // return failures
      return !assert(exp, act);
   });

   if (assert(invalids.length, 0)) {
      return true;
   }

   console.log("=== Assertion Failed");
   console.log("\tExpected: ", expected);
   console.log("\tActual: ", actual);
   return false;
}

module.exports = {
   test,
   assert,
   assertArray
};