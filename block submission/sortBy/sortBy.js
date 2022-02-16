/**
 * Naive Solution
 * 
 * Time complexity here will be, at worst
 * O N log N due to the native sort method.
 * Additionally we have 2 O of N. I believe this
 * can be improved to just O of N.
 */
function sortByNaive(order, data) {
   let weights = {};

   // O of N of the order parameter
   order.forEach((item, index) => {
      weights[item] = index + 1;
   });

   // O of N of the data parameter
   const output = data.filter((item) => weights[item] !== undefined);

   // Javascript native sort I believe is
   // O of N log N
   output.sort((a, b) => {
      if (weights[a] < weights[b]) {
         return -1;
      } else {
         return 1;
      }
   });

   return output;
}

/**
 * Instead of focusing on weights and ordering of an
 * output, focus on the number of occurances.
 * 
 * The order is already given but the challenge is actually
 * how many occurnaces there are in the data input.
 * 
 * This is stil O N log N but we do as little work as
 * possible in this scenario.
 */
function sortByOptimized(order, data) {
   const occurance = {};

   // loop once and count the occurances
   data.forEach(item => {
      if (occurance[item] === undefined) {
         occurance[item] = 0;
      }

      occurance[item]++;
   });

   // build our output
   const output = order.reduce((acc, item) => {
      const pushCount = occurance[item];

      for (let i = 0; i < pushCount; i++) {
         acc.push(item);
      }

      return acc;
   }, []);

   return output;
}

module.exports = {
   sortByNaive,
   sortByOptimized
};