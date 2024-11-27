
console.log(func());
console.log(b);//词法环境中的变量/常量，在声明之前不可访问  暂时性死区  TDZ
//hoisting 变量提升
var a=1;
console.log(a);
function func(){

}
  
let b=2;