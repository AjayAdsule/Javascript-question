// Find the maximum element in an array.?

const maxNum = (...num) => {
  console.log(Math.max(...num));
};
maxNum(12, 14, 74, 78, 56);

//Find the minimum element in an array.

const minNum = (...num) => {
  return Math.min(...num);
};
console.log(`The minimum number is ${minNum(12, 14, 17, 45, 2, 4)}`);

// Calculate the sum of all elements in an array.
const totalSum = (...sum) => {
  const result = sum.reduce((a, b) => {
    // i am using here reduce method to accumalte the array and return the total num of array
    return a + b;
  });
  return result;
};
console.log(`The total sum is ${totalSum(12, 14, 17, 45, 2, 4)}`);

//Reverse an array in place.
const reverseArray=(...arr)=>{
    return arr.reverse()
}
console.log(reverseArray(12,14,14,78,54,100));

//Find the average of all elements in an array.