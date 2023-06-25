const showOtp = document.querySelector(".showOtp");
let num=[0,1,2,3,4,5,6,7,8,9]
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let otp=''
  for (let i = 0; i < 7; i++) {
    otp+=num[randomNumber]
    
  }
  showOtp.textContent=otp

});
const randomNumber = () => {
  return Math.floor(Math.random() * num.length);
};
