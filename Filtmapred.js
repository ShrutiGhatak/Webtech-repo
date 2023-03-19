var bang=[500,1000,2000,3000,4000,5000,6000,7000];
var res=bang.filter((e)=>{return e<3000}).map((c)=>{return c*0.8}).reduce((e,value)=>{return e+value},0);
console.log(res);
for (var index in bang) {
    console.log(index);
}
for (var ele of bang) {
    console.log(ele);
}
console.log(`values=>index`)
bang.forEach((ele,index)=>{
    console.log(`${ele}=>${index}`);
})
var a=`hello`
console.log(`The value is ${a} of the variables a`)
