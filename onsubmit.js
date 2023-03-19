var txt1=document.querySelector('#a1')
var txt2=document.querySelector('#a2')
var form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    var a=txt1.value
    var b=txt2.value
    confirm(`The values ${a} and ${b} are successfully submitted`)
})