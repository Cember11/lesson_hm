// js  造人
//对象字面量
let cao={
    name:'小炒'
}
let fan={
    name:'番茄炒鸡蛋',
    age:18
}
//class  2015以后  es6
class Person{
    constructor(name,age){
        this.name=name
        this.age=age

    }
    eat(){
        console.log('吃饭')
    }

}

let wei =new Person('aw,18')
let guo =new Person('guoshuai',18)