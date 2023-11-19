// write a function to generate otp
// we want a variable where want store 4 digit otp
// require a function to generate a random number

let otp = [];
function printOtp() {
  for (let i = 0; i < 5; i++) {
    generateOtp();
  }
  function generateOtp() {
    let random = Math.floor(Math.random() * 10);
    otp.push(random);
  }
  console.log(otp);
}
print();


function fruits() {
  console.log(name);
  console.log(price);

  var name = "mango";
  var price = 122;
}
fruits();
