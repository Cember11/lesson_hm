# Symbol

- 唯一值
- 用Symbol函数来声明
- 给一个label 可选
- 返回值 唯一值
- 常用于对象字面量  不会  不需要担心被覆盖
  key的用法  
  这也是Symbol需要的原因
  大厂的大型项目  对象复杂  难维护  多人协作  以免出现属性覆盖的问题

  静态方法 
 - Object.keys()  对象的键名数组  但是不包括Symbol 类型的键名
 - Object.value()  对象的键值数组  但是不包括Symbol  类型的键值
 - Object.entries()  对象的键值对数组  但是不包括Symbol 类型的键值对


- 可迭代对象
Object.getOwnPropertyDescriptors(classmate)去获得对象上属性是否可迭代 
  - 虽然 symbol  enumerable 属性为true  但仍然不可枚举
  因为Symbol设计独特  就是提供唯一值的   只能通过
  getOwnPropertySymbols()  来获取

- ownProperty？ 
