function add(x,y){
    return x+y
}
// 和普通函数的区别 
// 一般建议首字母大写
//构造对象过程  构造函数
function Person(name,age){
    this.name=name
    this.age=age
}

const wen=new Person('wen',18)
const zhang=new Person('zhang',18)
console.log(wen.age)