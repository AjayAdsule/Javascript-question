//Question 2: How to access the first element of an array

const AccessFirstElement=(arr)=>{ // create a function
    return arr[0]  // return the array in bracket i am defining whch array i want
}
console.log(AccessFirstElement([12,41,75,74,58]))

//Question 3: How to add an element to the end of an array
const Arr=[12,441,45,74]
Arr.push(10)
console.log(Arr)

//How to remove the last element from an array
// create a function that remove last element
const RemoveLastElement=(arr)=>{
     arr.pop()  // pop is inbuild fuction that remove last element of array
     return arr
}
console.log(RemoveLastElement([12,14,12,2]))

//Question 5: How to check the length of an array
const CheckedLength=(arr)=> arr.length
console.log(CheckedLength([12,14,12,2]))

