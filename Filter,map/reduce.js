//Sum of numbers: Write a function that takes an array of numbers as input and returns the sum of all the numbers using the reduce() method.

const totalNum=(...arr)=>{
    const result = arr.reduce((a,b)=>{
        return a + b;
    })
    return result;
}

console.log(totalNum(1,2,3,4,5)); //15
let num=[12,12,6]
console.log(totalNum(...num)); //30

//Maximum value: Write a function that takes an array of numbers as input and returns the maximum value using the reduce() method.

const maxValue=(...arr)=>{
    const result= arr.reduce((a,b)=>{
        return a>b ? a : b;
    })
    return console.log(result)
}
console.log(maxValue(1,2,3,4,5)); //5
console.log(maxValue(1,2,31,40,15)); //40



const arr=[12,'ajay',54,41,]
const res= arr.forEach((ele)=>{
    console.log(ele)
})  