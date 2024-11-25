function Person(name,age){
    console.log(this)
    this.name=name
    this.age=age
}
Person.prototype.name='chenyan'
Person.prototype.hometown='guangzhou'
let person1=new Person();
let person2=new Person();
console.log(person1===person2)
console.log(person1.name,person2.name)