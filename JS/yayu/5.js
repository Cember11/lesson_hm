
// 原型？  cy
const cy={
    name:'陈炎',
    playBasketball:function(){
        console.log('kyrie Irving');
    }
}


function Person(name,age){
    console.log(this)
    this.name=name
    this.age=age
}
Person.prototype=cy;
const wen=new Person('wen',18);
wen.playBasketball();
console.log(wu.__proto__===cy);