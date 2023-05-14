// 1 Given an integer array :the program must compute and write how many integers are grater than ar equal to 10

const arr=[12,0,4,1,22,41,2,3,14,14,8] //create a array 
let len=0 //give initial value as 0 because i will increment the value if arr is grater than 10
for(let i=0; i<arr.length;i++){ // i want loop for traverse in each array with the help of loop i can traverse each array
    if(arr[i]>=10){ 
        len++
    }
}
console.log(`There are total ${len} integer in array is grater than 10`)

//2 given an integer array  and an integer value v :The program must search if V is in the array of 10 integers
//The program writes  V  is in the array or V is not in the array 

const arr2=[1,2,3,4,'v',6.7,8,9,0] // create a array in which i pass v value

for(let i=0; i<arr2.length;i++){ //using loop for accessing all value in array 
    if(arr2[i]==="v"){ // use if else condition if V is containing or not
        console.log("V is in the array")
    }
    else{
        console.log('v is not in the array ')
    }
}
// given an integer array the program must output the largest element in the array, an the index in which that element was found
const arr3=[12,41,45,78,41,25]
arr3.forEach((val,index)=>{
    if(Math.max(val)){
        console.log(`The max number is ${index}: ${val}`)
    }
})

//Write a function that takes an array of numbers as input and returns the sum of all the numbers.

const Adder=(a1,a2)=>{
    return a1+a2
}


