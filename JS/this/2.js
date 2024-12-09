 var name="李四";
 var a={
name:"张三",
func1:function(){
    console.log(this.name);

 },
 func2:function(){
    setTimeout(function(){    //这是一个普通函数  this指向全局  如果是严格模式  则指向undefined
        this.func1();
    }.call(a),1000)
 }
}

a.func2();