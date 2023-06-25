// write a function  that add 55 number from array
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < 6; i++) {
    let add = "#";
    add += arr[Math.floor(Math.random() * arr.length)];
    console.log(add);
  }
}
// write a function to find min and max number in array
{
  const num = [12, 14, 52, 4, 54, 69, 45, 41, 23, 64, 14, 10, 22];
  const findMinMax = () => {
    let max = num[0];
    let min = num[0];
    for (let i = 1; i < num.length; i++) {
      if (num[i] < min) {
        min = num[i];
      } else if (num[i] > max) max = num[i];
    }
    return { min, max };
  };
  console.log(findMinMax());
}

//Write a program to reverse an array or string
{
  const arr = [12, 14, 11, 26, 41, 23, 5];
  const reverseArray = (...arr) => {
    return arr.reverse();
  };
  let arr1 = reverseArray(arr);
  console.log(arr1);

  let arr2=reverseArray(11,14,52,14,55,4)
  console.log(arr2);

}

//Check if two arrays are equal or not
{
  const arr1=[1,2,3]
  const arr2=[3,2,1]
  function checkEqual(arr1,arr2){
    if(arr1==arr2){
      console.log('array is same');
    }else{console.log('array is not same');}
  }
  checkEqual(arr1,arr2)
}
