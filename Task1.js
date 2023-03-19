var obj={
    name:'bandar bididsha',
    ph:8777698595,
    adress:{
        jungle:'Kolkata',
        sector:5,
        tree:'qspider'
    }
}
console.log(obj);
console.log(obj.adress);
console.log(obj.adress.tree);
var obj1={
    name:'bandar',
    ph:8777698595,
    adress:function(){
        return this.name;
    }
}
console.log(obj1.adress());