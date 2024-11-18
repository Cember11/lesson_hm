#  百度面试题之定位

## 文档(document  顺序)流（从上到下，块级，从左到右 行内）
- document html 文档
  网页的结构
  页面绘制的本质

  - 按文档流先绘制 #box1
    盒子的顺序
    精确计算盒子的大小= content内容大小（width*height）+内边距padding+边框border
    盒子的位置   在原来的位置上给margin间距，给位置定位


    ## position 的属性与原理
    - relative 相对定位
       - 相对默认的位置      元素相对于它在正常文档流中的位置进行定位。使用top、bottom、left和right属性可以调整元素的位置。
       - 盒子原来的占位不受影响 
    - absolute 绝对定位
      - 绝对定位会离开文档流
      - 找到最近的  祖先有定位节点的元素
        如果没有找到  相对于body定位