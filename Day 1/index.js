// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

//In that function i am using ternary operator and (or) logical operator
function Banjo(name) {
  if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    //if name contain starting letter with R and r execute the if condition
    console.log("you are playing banjo");
  } else {
    console.log("you are not playing banjo"); // else execute this function
  }
}
Banjo("ravi");
// 2 : write a function that gives file extension name

const FileName = "index.html"; // create file name
const FindExtension = () => FileName.slice(FileName.lastIndexOf(".")); //using slice method and in slice give lastindex that return position of string
console.log(FindExtension());

function Extension(str){
   const ExtensionName= str.slice(str.lastIndexOf("."))
   return ExtensionName
}
console.log(Extension('index.js'))