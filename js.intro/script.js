// console.log("first program");

// console.log(document.body.style.background="green");

// window.setTimeout(function(){
//     document.body.style.background="grey";
   
// }, 5000);

// window.setInterval(function() {
//     document.body.innerHTML=`<h1>${new Date()}</h1>`
// }, 1000);

// window.alert("hello world");

// const result=window.prompt("what is your name?");
// console.log(result);


//JS Selectors

const title= document.getElementsByClassName("red");
title[0].style.fontSize="60px";

const firstList= document.querySelectorAll(".red");
firstList.forEach(function(item){
    item.style.color='gray';
})

//events

const button=document.querySelector('button');
button.addEventListener("keyup", function(event){
    console.log(event)
    document.body.style.background="green";

})
