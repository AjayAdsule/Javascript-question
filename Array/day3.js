//Write a function sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

const SumArray = (...arr) => {
  const result = arr.reduce((num1, num2) => {
    return num1 + num2;
  });
  console.log(result);
};
SumArray(12, 14, 14, 12);

//Write a function reverseArray that takes an array as input and returns a new array with the elements in reverse order.

const reverseArr = (...arr) => {
  const result = arr.reverse();
  console.log(result);
};
reverseArr(12, 10, 01, 11, 00); // [0, 11, 1, 10, 12]

//Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

const findMax = (...num) => {
  if (num === 0) {
    return null;
  }
  let max = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
};
console.log(findMax(12, 100, 11, 45, 10));

// Write a function to find the maximum element in an array.
{
  const findMax = (...arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  };
  // console.log(findMax(12, 11, 41, 50));
}
// Write a function to calculate the sum of all the elements in an array.
{
  const total = (...num) => {
    const result = num.reduce((a, b) => {
      return a + b;
    });
    return result;
  };
  // console.log(total(12, 8, 10, 20));

  // logic
  // create sum variable assign 0
  // concept of loop arr[0]=10 store in sum variable then iterate next value is 15 store in sum 10+15=25 and soo on loop will run
  const newTotal = (...arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  // console.log(newTotal(10,15,5,25));
}

// Write a function to remove duplicate elements from an array.
{
  const removeDuplicate = (...num) => {
    const result = num.filter((item) => {
      return !item == item;
    });
    return result;
  };
  // console.log(removeDuplicate(12,12,10,5,10,5));
}
// Write a function to check if an array is empty.
const checkArrayEmpty = (...arr) => {
  if (arr === []) {
    console.log("array has empty");
  } else {
    console.log("array has value");
  }
};
const arr = [];
console.log(checkArrayEmpty(arr)); //output is wrong

// Write a function to reverse the order of elements in an array.
const reverseArray = (...num) => {
  const result = num.reverse();
  console.log(result);
  console.log(typeof result);
};
// reverseArray(12, 14, 12, 441, 10);

// Write a function to sort an array in ascending order.
// Write a function to check if an element exists in an array.
const checkedElement = (arr, che) => {
  const result = arr.includes(che); //this is inbuilt function
  console.log(result);
};
let val = [12, 14, 14, 20, 45, 41, 55, 2];
// checkedElement(val,120)

const checkedManually = (val, cond) => {
  for (let i = 0; i < val.length; i++) {
    if (val[i] == cond) {
      console.log("match");
    } else {
      console.log("not found");
    }
  }
};
checkedManually(val, 2); //output is not excatly
// Write a function to find the index of a specific element in an array.
const findIndex = (arr, ele) => {
  let index = arr.indexOf(ele);
  console.log(index);
};
// findIndex(val, 12);
// findIndex(val, 2);
// Write a function to remove a specific element from an array


// Write a function to find the average of all the elements in an array.

var givenArray = [
  23, 45, 56, 67, 23, 56, 68, 34, 4556, 78, 655, 23, 568787, 89845, 343, 54576,
  7873, 323, 54, 636, 6836, 575,
];

// find numbers who odd from given array and return array with those number...

{
  const findOdd = (arr) => {
    const newArr = arr.filter((num) => {
      return num % 2 !== 0;
    });
    console.log(newArr);
  };
  // console.log(findOdd(givenArray));
}

{
  const findsOdd = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
  };
  // findsOdd(givenArray);
}

