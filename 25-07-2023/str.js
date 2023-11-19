// replace

let str="I am blockchain developer And java developer anD a superstar"

{
    // replace --> does not 
    let pattern= /and/gi
    let newStr=str.replace(pattern,"crypto") 
    console.log(newStr);
   
}

const btn=document.querySelector('.btn')
const chan=document.querySelector('.random')

btn.addEventListener('click',randomNumber)

function randomNumber(){
    let num =Math.floor(Math.random()*10);
    
    chan.innerHTML=`Random number : ${num}`
}
    
