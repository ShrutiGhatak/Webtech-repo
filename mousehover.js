var div=document.querySelector(`div`)
var a=document.querySelector(`#a1`)
addEventListener(`scroll`,()=>{
    var random=Math.random()*1000
    var res=Math.round(random)
    while(res>255){
        res=res-10
    }
    var random=Math.random()*1000
    var res1=Math.round(random)
    while(res1>255){
        res1=res1-20
    }
    var random=Math.random()*1000
    var res2=Math.round(random)
    while(res2>255){
        res2=res-10
    }
    console.log(res);
    console.log(res1);
    console.log(res2);
    document.body.style.backgroundColor=`rgb(${res},${res1},${res2})`
})
div.addEventListener('mouseover',()=>{
    var random=Math.random()*1000
     var res=Math.round(random)
     while(res>255){
         res=res-10
     }
     var random=Math.random()*1000
     var res1=Math.round(random)
    while(res1>255){
       res1=res1-20
    }
    var random=Math.random()*1000
    var res2=Math.round(random)
    while(res2>255){
         res2=res-10
     }
     console.log(res);
     console.log(res1);
     console.log(res2);
    div.style.backgroundColor=`rgb(${res},${res1},${res2})`
   // div.style.backgroundColor=`rgb(123,233,123)`
})
