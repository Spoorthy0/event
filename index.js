//EventListeners : Listen for specific events to create interactive webpages
//  events : click,mouseover,mouseout
//  .addEventListener(event,callback)
/*const myBox=document.getElementById("myBox")
function changeColor(event){
    console.log(event);
    event.target.style.backgroundColor="tomato";
    event.target.textContent="OUCH!🤕"
}


myBox.addEventListener("click",changeColor);
myBox.addEventListener("mouseover",event=>{
 event.target.style.backgroundColor="yellow";
    event.target.textContent="Dont do it!😯"
})
myBox.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="rgb(72, 225, 21)";
       event.target.textContent="Click me😉"
   })
  //  event.target.style.backgroundColor="tomato";
//});
*/
document.getElementById("dark-mode-toggle").addEventListener("change", function(){
    if(this.checked){
        document.body.style.backgroundColor="#121212";
        document.body.style.color="white"
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
});