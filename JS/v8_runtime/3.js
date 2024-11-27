function bar(){
    console.log(myname)
}

function foo(){
    var myname="张三"
    bar()//先查找它的词法作用域的那个变量 函数定义在哪个域中  函数的作用域就是这个域 
    console.log(myname)
}

var myname="李四"
foo()

//输出  李四 张三 