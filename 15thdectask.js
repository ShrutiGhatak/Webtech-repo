var btn=document.querySelector('button')
var txt1=document.querySelector('#a2')
var txt2=document.querySelector('#a3')
var h1=document.querySelector('#h11')
btn.addEventListener('click',()=>{
    var da1=txt1.value
    var da2=txt2.value
    var data1=document.createElement("p").innerHTML=da1
    var data2=document.createElement("p").innerHTML=da2
    h1.innerHTML=`${data1}${data2}`
})