//Write a program to check if a number is even or odd.
// Ever number are those number which is divded by 2 
const CheckEven=()=>{
    const num=[12,47,41,14,18,45,52] // store number in num variable
    const result=num.filter((nums)=>{  //create a filter function that filter even numbers
        return nums%2==0
    })
    console.log(result)
  
}
CheckEven()

//Write a program to find the maximum number among three given numbers.
//You can find max number with the help of Math.max inbuilt function
const FindMaxNum=(...Nums)=>{ //i am using spread operator for giving array of number instead typing a,b,c,d...
    const result=Math.max(...Nums) //passing block-scope variable in max function 
    console.log(result)
}
FindMaxNum(12,47,45,74,54)

//Write a program to find the length of an array.
const FindArrayLength=(...array)=>{ // i am using spread operator  
    let result=array.length
    return result
}
console.log(FindArrayLength(12,485,7,47))