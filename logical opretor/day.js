//Write a JavaScript function that takes two numbers as input and returns true if the first number is greater than the second number, false otherwise.

const greaterNum=(a,b)=>{
    if(a>b){
        return true
    }
    else{
        return false
    }
}
console.log(greaterNum(12,10));//true
console.log(greaterNum(12,100));//false

//Write a JavaScript function that takes two strings as input and returns true if the strings are equal, false otherwise.

const equals=(a,b)=>{
    if(a===b){
        return true;
    }else{
        return false;
    }
}
console.log(equals('ajay','Ajay')); //false
console.log(equals('ajay','ajay')); //true