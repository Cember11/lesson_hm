function foo(){
    var a=1;
    let b=2;
    {
        let b=3;
        var c=4;
        let d=5;
        console.log(a);
        console.log(b);
    }//块中代码运行完已经销毁
    console.log(b);
    console.log(c);
    console.log(d);
}
foo()

//输出  1 3 2 4（var c可以变量提升） 报错  d is not defined  块中代码运行完已经被销毁