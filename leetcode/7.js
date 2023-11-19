//Given an object or an array, return true if it is empty.
const obj={name:'ajay',age:33}
const obj2={}
const arrs=[]
const isObjectEmpty=(obj)=>{ 
    if(Object.keys(obj).length===0 || obj.length==0){
        return true;
    }
    else{
        return false;
    }

}
console.log(isObjectEmpty(obj));
console.log(isObjectEmpty(obj2));
console.log(isObjectEmpty(arrs));

// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

{
    const arr=[12,41,5,23,2]
    
    
}

