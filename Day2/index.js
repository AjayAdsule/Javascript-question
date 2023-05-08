//Return the First Element in an Array
const GetFirstArray=(array)=> console.log(array[0]) 
GetFirstArray([12,47,45,74])

//Return the Next Number from the Integer Passed
//addition(0) ➞ 1

const NextNumber=(num)=> console.log(num+1)
NextNumber(12)

//Area of a Triangle 
//Write a function that takes the base and height of a triangle and return its area.
//The area of a triangle is: (base * height) / 2
const  AreaOfTriangle=(height,base)=>{
    return (height*base)/2
}
console.log(AreaOfTriangle(10,5))

//Write a function that converts hours into seconds.
// In 1 hours there are 3600 second
const GetSeconds=(hours)=> console.log(hours*3600)
GetSeconds(4)

//Create a function that takes voltage and current and returns the calculated power.
const CalculatedPower=(voltage,current)=>{
    const power= voltage*current // i make a block scope variable in that i store current and voltage 
    return console.log(power)
}
CalculatedPower(12,15)