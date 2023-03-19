var fact=1
for(let i=5;i>=1;i--){
    fact=fact*i;
}
console.log(fact);





var fib1=0
var fib2=1
console.log(fib1+" "+fib2+" ");
for(let j=1;j<=5;j++){
let fib3=fib1+fib2;
console.log(fib3+" ");
fib1=fib2;
fib2=fib3;
}






var no=5;
let flag=true;
for(let k=2;k<no;k++){
    if(no%k==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log("It's a Prime Number");
}else{
    console.log("It's not a Prime Number");
}






var s1="JavaScript"
let s2=" "
for(let l=s1.length;l>=0;l--){
    s2=s2+s1.charAt(l);
}
console.log(s2);




var v1=""
var v2="MOM"
for(let m=v2.length-1;m>=0;m--){
v1=v1+v2.charAt(m)
}
if(v1==v2){
    console.log("IT's a Palindrone");
}else{
    console.log("It's Not a Palindrone");
}