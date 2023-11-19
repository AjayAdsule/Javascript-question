// write a function that give you duplicate array

const arr = [12, 5, 41, 12, 5, 20, 1, 5];
{
  let dupArr = arr.filter((ele, index, arr) => {
    return arr.indexOf(ele) !== index;
  });
  console.log(dupArr);
}

{
  // find mix/max number

  const findMax = (arr) => {
    return arr.reduce((pre, curr) => {
      return pre > curr ? pre : curr;
    });
  };
  console.log(findMax(arr));

  const findMin = (arr) => {
    return arr.reduce((pre, cur) => {
      return pre < cur ? pre : cur;
    });
  };
  console.log(`the min number is ${findMin(arr)}`);
}
{
  //find the largest number of array
  const findLargest = (arr) => {
    let largest = Math.max(...arr);
    let index = arr.indexOf(largest);
    arr.splice(index, 1);
    let second = Math.max(...arr);
    index = arr.indexOf(second);
    arr.splice(index, 1);
    return second;
  };
  console.log(findLargest(arr));
}

{
    // find and filter method
    const obj=[
        {name:'ajay',age:25},
        {name:'vijay',age:28},
        {name:'mahesh',age:40},
        {name:'dinesh',age:14},
        {name:'laxman',age:18},
    ]

    const filterMethod=obj.filter((item)=>{
        return item.age>20;
    }).map((item)=> item.name)
    const findMethod=obj.find((item)=>{
        return item.age>20;
    })
    console.log(filterMethod);
    console.log(findMethod);
}