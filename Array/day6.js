//iven an array of numbers, write a function to find the sum of all the elements.

const arr = [12, 11, 4, 12, 52];
const totalCount = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
};
// console.log(totalCount(arr))

// write a function that generate 6 digit otp

  let otp=0;
  const generateOtp = () => {
    for (let i = 0; i < 7; i++) {
      otp += randomNumber();
    }
    return otp
  };
  function randomNumber() {
    return Math.floor(Math.random() * 10);
  }
//   console.log(randomNumber());
  console.log(generateOtp());

