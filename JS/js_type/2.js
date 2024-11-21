let obj={
    name: "wql",
    job : "前端开发工程师",
    company : "字节",
//对象里的属性值会放进堆内存
    hobbies : ["吃饭","睡觉","打豆豆"]
}

obj.hometown="南昌"
let a=1;
//拷贝
let b=a;
b=3;
//引用式赋值
let obj2=obj;
obj2.name="wql2"
console.log(a,b);
console.log(obj,obj2);