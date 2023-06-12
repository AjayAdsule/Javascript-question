const arr = [12, 11, 45, 14, 24, 52, 14, 1,5,10,5,5];
const target = 25;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    // console.log(`${arr[i]}, ${arr[j]}` )
    for (let k = j + 1; k < arr.length; k++) {
      for (let t = k + 1; t < arr.length; t++) {
        if (arr[i] + arr[j] + arr[k] == target) {
          console.log(`${arr[1]} ,${arr[j]}, ${arr[k]},${arr[t]}= ${target}`);
        }
      }
    }
  }
}
