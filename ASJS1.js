var count=document.querySelector("#count");
var color=document.querySelector("#col");
var formm=document.querySelector("form");
var botdiv=document.querySelector("#bot");
formm.addEventListener("submit",(e)=>{
    e.preventDefault();
    var num=Number(count.value);
    var colors=String(color.value);
   for(let d=1;d<=num;d++){
       var dive= document.createElement("div");
      var nDiv=  botdiv.appendChild(dive);
      nDiv.style.backgroundColor=colors;
    
   }
    
    


})