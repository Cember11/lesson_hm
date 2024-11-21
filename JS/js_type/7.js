// js 是一切皆对象 面对对象的很纯粹
let arr= [1,2,3,4,5];
arr.customProperty="this is a custom property";
arr.push(6)
arr.forEach(function(item){
    console.log(item)
})