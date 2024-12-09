# 定时器

- setTimeout 是异步执行的计时器  会在主线程执行完后才执行
   callback 函数 放入 event loop  时间（ms）

- 一定会在指定的时间后执行吗？
- 找回？
   执行的是回调函数

- setInterval
没间隔 1s 打印一次 返回一个id 可以用clearInterval(id) 清除

- 定时器ID  

- 如何用 setTimeout 实现 setInterval
  -  场景编程题
  - 手写题  fn函数
    - callback  t 参数
    - 可以用setTimeout 实现
    - 递归