function hasTargetSum(array, target) {
  // Write your algorithm here
  // Iterate over each element in the array
  for (let i = 0; i < array.length; i++) {
    // For each element, iterate over the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      // If the sum of the current element and any other element equals the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no such pair is found, return false
  return false;
}

/*
  Write the Big O time complexity of your function here:
  The time complexity of this function is O(n^2), where n is the length of the array. This is because we have nested loops where we iterate over each element of the array, and for each element, we iterate over the rest of the array.

*/

/*
  Add your pseudocode here:
  - Iterate over each element in the array
  - For each element, iterate over the rest of the array
  - If the sum of the current element and any other element equals the target, return true
  - If no such pair is found, return false
*/

/*
  Add written explanation of your solution here:
  - We iterate over each element in the array.
  - For each element, we iterate over the rest of the array to find another element to form a pair.
  - If we find a pair whose sum equals the target, we return true.
  - If no such pair is found after iterating through all elements, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
