// Write a function to find the minimum number in an array.
// Write a function to calculate the sum of all numbers in an array.
// Write a function to find the average of all numbers in an array.
// Write a function to reverse an array in place (without creating a new array).
// Write a function to remove duplicates from an array.
// Write a function to check if an array contains a specific element.
// Write a function to sort an array in ascending order.
// Write a function to find the second largest number in an array.
// Write a function to merge two sorted arrays into a new sorted array.

// Write a function to find the maximum number in an array.

const number=[12,14,74,52,4,26,47,1,3,2]
{
    let max=[]
    let count=1
    for(let i=0;i<number.length;i++){
        if(number[i]>count)
        max.push(number[i])
        count++
    }
    console.log("The Maximum Number is "+max);
}
//with the help of filter method
{
   const FindMax=(...arr)=>{
    let result=Math.max(...arr)
    console.log(result);
   }
   FindMax(12,10,5,1,52)
}

// Write a function to calculate the sum of all numbers in an array.
{
    const allNum=(num)=>{
        let max=num.reduce((a,b)=> a+b)
        console.log(max);
    }
    allNum(number)
}
//using loop
{
    let total=0;
    for(let i=0;i<number.length;i++){
        total+=number[i]
    }
    console.log(`the total num is ${total}`);
}