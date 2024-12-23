# 算法+小黄书=大厂实习

- 怎么学习算法
 - leetcode 热题 100  200+题目
 - 代码随想录

- 算法的核心效率
装机和品牌机 性价比
衡量    时间复杂度 空间复杂度
不要急于刷题  先打好算法基础
大O  时间复杂度  空间复杂度
O(1)    O(n)     O(logn)     O(n*m)    O(n^2)     O(n^n)
常数     
- 时间复杂度是怎么计算的
 - 计算的方法？
 - 代码的执行次数 T（n）Time次数
 - 抓住主要矛盾，O(n)就是执行的趋势...当n无限趋近于极限...
 所以系数不重要，  可以省略
 由执行次数T（n）可以推出算法的复杂度
  - 由边界理论  输入规模无限大 时间复杂度表达的是执行次数的增长**趋势**
  所以  系数忽略  抓主要矛盾

- 算法不是解法，而是我们能够用恰当的活着更优时间复杂度或者空间复杂度，解决之。
 
 排序  冒泡排序 O(n^2)
 快排  O(n*logn)

 空间复杂度
   算法在运行过程所占**额外**空间的大小

   ## 用js刷leetcode
   - 数据结构
    - 线性
     - 数组 最简单最好用
       - 内置方法很多 开箱即用 
        建议优先考虑数组，节点+指针比较复杂 []
        除非 不连续
        - 有丰富的API  栈  队列的push pop ...

     -栈  队列  链表
    - 非线性
     - 树
     - 图

    - 算法中如何定义一个数组
    [1,2,3,4,5,6,7,8]
    （new Array（7））.fill(1)

    - 访问和遍历
    arr[index]  O(1)  链表  O(n)
    - 遍历 for foreach map