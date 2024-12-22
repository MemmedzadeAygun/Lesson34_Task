
let btn1=document.getElementById("increase");
let value=document.querySelector(".num");
let btn2=document.getElementById("decrease");
let btn3=document.getElementById("increase_2");
let btn4=document.getElementById("decrease_2");
let btn5=document.getElementById("changeColor");
let btn6=document.getElementById("increase_size");
let btn7=document.getElementById("decrease_size");

btn1.addEventListener("click", () =>{
    value.innerHTML = parseInt(value.innerHTML)+1;
})

btn2.addEventListener('click', () => {
    value.innerHTML=parseInt(value.innerHTML)-1;
    if (parseInt(value.innerHTML)<0) {
        value.innerHTML=0;
    }
})

btn3.addEventListener('click', () => {
    value.innerHTML=parseInt(value.innerHTML)+5;
})

btn4.addEventListener('click', () => {
    value.innerHTML=parseInt(value.innerHTML)-5;
    if (parseInt(value.innerHTML)<0) {
        value.innerHTML=0;
    }
})

function getRandomColor(){
  let red = Math.floor(Math.random()*256);
  let green=Math.floor(Math.random()*256);
  let blue=Math.floor(Math.random()*256);

  return `rgb(${red},${green},${blue})`;
}

btn5.addEventListener('click', () => {
    value.style.color=getRandomColor();
})

btn6.addEventListener('click', () => {
    let currentSize=value.style.fontSize || '24px';
    let size=parseInt(currentSize);

    value.style.fontSize=(size+1)+'px';
})

btn7.addEventListener('click', () => {
    let currentSize=value.style.fontSize || '32px';
    let size=parseInt(currentSize);

    value.style.fontSize=(size-1)+'px';
})