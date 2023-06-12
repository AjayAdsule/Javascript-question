//Create a button element dynamically and append it to the body of the document.
//Done
{
    const button=document.createElement('button')
    button.innerText="click"
    document.body.appendChild(button)
}
//Change the background color of an element with the ID "myElement" to red.
//done
{
    const myElement=document.querySelector('#myElement')
    myElement.style.backgroundColor='red'
}
//Add a class "highlight" to all elements with the class "item".
{
    const item=document.querySelectorAll('.item');
        item.forEach((ele)=>{
            ele.classList.add("highlight")
        })
        
}
//Create an input element dynamically and set its type to "checkbox".
{
    const  input=document.createElement('input')
    input.type="checkbox"
    document.body.appendChild(input)
}