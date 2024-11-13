// RHS 查找失败的时候  会报出  ReferenceError: b is not defined 错误
function foo(a){
console.log(a+b);
b=a;
}

foo(2);