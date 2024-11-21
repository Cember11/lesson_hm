let a=null;//栈内存  此时null表示空值
console.log(a);
//堆内存
let largeObject={
    data: new Array(100000000).fill('a')
}

//释放内存  垃圾回收
//哲学   此时null表示成一个不存在的对象
largeObject=null;