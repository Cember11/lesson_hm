//"use strict"
var x=2;
var obj2={
    x:5,
    foo:foo
}
var obj ={
    x:1,
    foo:function(){
        console.log(this)
        console.log(this.x)
    }
}
//函数体
var foo =obj.foo;
//相同点是 都是同一个函数在运行
//区别： 调用的位置不一样    被谁调用
//调用的时候
//对象的方法被调用
obj.foo()
//普通函数被调用
//被window调用
foo()//没有必要