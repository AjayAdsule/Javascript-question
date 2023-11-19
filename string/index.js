// Write a program to count the number of characters in a string.
{
  const countOfString = (str) => {
    const result = str.length;
    console.log(result);
  };
  countOfString("ajay"); //4
  countOfString("vijay"); //5
}
// Write a program to reverse a string.
{
  const reverseString = (str) => {
    const result = str.split("").reverse() + str.join;
    console.log(result);
  };
  reverseString("ajay"); //verify the input
}
// Write a program to check if a string is a palindrome.
// Write a program to convert a string to uppercase.
{
  const strUpperCase = (str) => str.toUpperCase(); //shorthand function
  console.log(strUpperCase("ajay"));
}
// Write a program to convert a string to lowercase.
{
    const strLowerCase=(str)=> str.toLowerCase()
    console.log(strLowerCase("AJAy"));
}
// Write a program to check if a string contains a specific substring.
{
    const containSubStrings=(str)=>str.substring(2)
    console.log(containSubStrings("javascript"));
}
// Write a program to replace all occurrences of a substring in a string.
{
  const replace=(str)=>{
       let sub= str.replace('is','are')
       return sub;
  }
  console.log(replace('ajay is devloper'), 'this is replace ');
}
// Write a program to split a string into an array of substrings.
{
  const splits=(str)=>{
    let result= str.split(',');
    return result
  }
  console.log(splits('ajay is devloper, and web3 lernoing'),'this is split function');
}
// Write a program to remove all whitespace from a string.
{
  const removeWhiteSpace=((str)=>{
    let result= str.trim(' ');
    return result
  }) 
  console.log(removeWhiteSpace('ajay is devlo per'));
}
// Write a program to capitalize the first letter of each word in a string.
{
  const capitalize=(str)=>{
   
    
    
  }
  console.log(capitalize('ajay is devloper'));
}
