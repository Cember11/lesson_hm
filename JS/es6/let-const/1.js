//大厂语法基础题

//局部作用域
function sayHello(){
//变量
    var name="金子涛";
return "Hello"+name;
}
// 定义一个变量 age，并赋值为 10
//es5 全局作用域
var age = 10;

// 判断 age 是否大于 5

//{}代码块
//块级作用域
if (age > 5) {
    // 如果 age 大于 5，则定义一个变量 dogYears，其值为 age 乘以 7
    //es6 新增的let声明
    var name="过帅";
    let dogYears = age * 7;
    // 打印输出 "you are" 和 dogYears 的值
    console.log("you are" + dogYears);
}
console.log(name)
console.log(dogYears)



console.log(sayHello())