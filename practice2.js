let saree=[100,200,300,400,500]
console.log(saree)
var res=saree.filter((fsarees)=>
{
    return fsarees<300
})
console.log(res)
var t=res.map((c)=>
{
    return c*10
})
console.log(t)
var m=res.reduce((a,value)=>{
    return a+value
},0)
console.log(m)
var j=saree.filter((e)=>{
    return e<500}).map((k)=>{return k*10}).reduce((l,value)=>{return l+value},0)
    console.log(j)
