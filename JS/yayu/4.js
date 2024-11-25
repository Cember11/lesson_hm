// constructor
function Person(name,age){
    console.log(this)
    this.name=name
    this.age=age
}


Person.prototype.eat=function(){
    console.log('吃饭')
}
Person.prototype={
    eat:function(){
        console.log(`${this.name}在吃饭`);
    }
}
const xck=new Person('xck',18);
xck.eat();
const xc=new Person('xc',18);
xc.eat();