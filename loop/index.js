//Write a loop that prints numbers from 1 to 10.

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

//Write a loop that prints even numbers from 2 to 20.
// for(let i=2;i<=20;i+=2){
//     console.log(`the even number is ${i}`)
// }
//Write a loop that prints the elements of an array in reverse order.
// const arr= [12,14,74,54,7]
// for(let a= arr.length-1;a>=0;a--){
//     console.log(arr[a])
// }
//Write a loop that finds the maximum number in an array.
const findMax=(...arr)=>{
   const max=arr.forEach((ele)=>{
     console.log(Math.max(...ele));
   })
   return max
}
findMax([12,14,14,50])