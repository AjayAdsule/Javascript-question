//Write a JavaScript condition to check if a number is positive, negative, or zero.

const checkedNum=(num)=>{
    if (num<0){
        return 'negative';
    }
    else{
        return 'positive'
    }
}
console.log(`The number is ${checkedNum(-2)}`);
console.log(checkedNum(2));

//Write a JavaScript condition to check if a number is even or odd.
// even number are those number which is divided by 2
const checkedEvenOdd=(num)=>{
    if(num% 2 ==0){
        return 'even'
    }
    else{
        return 'odd'
    }
}

console.log(checkedEvenOdd(4))

//Write a JavaScript condition to check if a number is between 10 and 20 (inclusive).

const checked=(num)=>{
    if(num >=10 && num<=20){
        return `the number in range `
    }
    else{
        return 'the number is not in range'
    }
}
console.log(checked(25))
console.log(checked(15))
console.log(checked(10))

//Write a JavaScript condition to check if a person is eligible to vote. The person must be at least 18 years old and a citizen.

const checkedVoteRight=()=>{
    const age= Number(prompt('enter your age'))
    const citizen= prompt('enter your country name?')
    if(age>=18 && citizen==='indian' || citizen ==='india'){
        return `you are eligible`
    }
    else{
        return `you are not eligible`
    }
}
// console.log(checkedVoteRight())

//Write a JavaScript condition to check if a number is divisible by both 3 and 5.
const divisible=(num)=>{
    if(num%3==0 && num%5==0){
        return `num is divisible`
    }
    else{
        return `num is not divisible`
    }
}
console.log(divisible(15));

//Write a JavaScript condition to check if a year is a leap year. A leap year is divisible by 4 but not divisible by 100 unless it is also divisible by 400.
// leap year is divisible by 4
const leapYear=(year)=>{
    if(year %4==0 && year % 100 !==0){ // the condition is if year is divisible by 4 and not by 100 return the true else false
        return `the year is leap`
    }
    else{
        return `the year is not leap`
    }
}
console.log(leapYear(3)); //the year is not leap
console.log(leapYear(40)); //the year is leap

//Write a JavaScript condition to check if a character is an uppercase letter.
const char=(char)=>{
    if(char.toUpperCase()===char){  // if character 
        return `the character is uppercase`
    }
    else{
        return `the character is not uppercase`
    }
}
console.log(char('Ajay')); //the character is uppercase