function Person(name,age){
    console.log(this)
    this.name=name
    this.age=age
}

Person('chan',  18)//普通方式运行
const dys=new Person('dys',18)
const dyf=new Person('dyf',18)//以构造函数运行