
let c=Number (prompt("enter the total marks"))
var a=(c/600)*100;
document.write("You have Got  "+a+"%  &  ")
if (a<35) {
document.write("You Hava Failed")
}
else if (a>34 && a<50) {
    document.write("You have got 3rd Class")
    
}
else if (a>49 && a<60) {
    document.write("You have got 2nd Class")
    
}
else if (a>59 && a<84) {
    document.write("You have got 1st Class")
    
}
else if (a>84) {
    document.write("You have got Distingsion")
    
}