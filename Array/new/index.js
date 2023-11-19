let arr = [1, 5, 1, 51, 5, 63, 5];
        
const duplicateArr=arr.filter((ele,index,arr)=>{
    console.log("this is arr",arr);
    console.log('this is ele',ele);
    console.log(`this is index`,index);
    console.log(`this is indexof ${arr.indexOf(ele)}`);
    return arr.indexOf(ele)!==index
})
console.log(duplicateArr);