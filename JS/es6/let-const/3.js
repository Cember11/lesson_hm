//当const声明的是复杂类型（例如PERSON对象）
const Person={
name:'afei',
age:19,
hobbies:["打飞机","打脚"],
}

//Assignment to constant 
Person.hobbies.push("喵鸟")
//PERSON='123'不可以改类型
console.log(Person)