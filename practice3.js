var obj={
    Name:"Shruti",
    Love:"Biriyani",
    favourites:{
        Color:"yellow",
        Place:"Kolkata"
    }
}
console.log(obj.favourites.Color)
var obj1=new Object()
obj1.name="Rini"
obj1.love="Goa"
console.log(obj1)
console.log(obj.Name)
obj1.love="Kashmir"
Object.keys(obj1)
var obj2={
    pwd:"5555",
    address:()=>{
        return "HIHI"
    }
}
console.log(obj2.address())