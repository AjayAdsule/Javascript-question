// let arr=[12,14,45,22,41,55,69,54,12,5]
// arr.push(12) // add number at the last of array
// console.log(arr);
// arr.pop()
// console.log(arr); // remove the number at the last of array

// arr.shift()
// console.log(arr);

let start = 8723;
let end = 6567;


const twoStage = (start, end) => {
    let filterArray = [];
  for (let i = start; i > end; i--) {
    if (i % 2 == 0 || i % 5 == 0 || i % 10 == 0) {
       filterArray.push(i);
    }
  }
  console.log(filterArray);
  let result=[]
  for(let k=0;k<filterArray.length;k=k+2){
    result.push(filterArray[k]);
  }
  console.log(result);
};
twoStage(start, end);
// console.log(filterArray);