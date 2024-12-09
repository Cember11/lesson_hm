# 认识几个url
url的设计模式  restful api
网站是用来暴露资源的  如何将资源暴露出去
http://localhost:3001/posts/  列表页的链接
 - http://localhost:3001/posts/1（：id  查询参数）  详情页的链接
 - http://localhost:3001/posts/1  用户主页链接


- 数据的查询  Read
- 访问资源的方式
  - apiFox  是啥？  Web请求代理软件
  Get http://localhost:3000/posts/1  访问资源
  Patch  http://localhost:3000/posts/1  修改资源
  - 资源 db.json  users posts
  
  - HTTP 协议
    请求行：Method（动作  GET访问|POST新增|PATCH修改）+url（资源）
    请求头：

  - json-server 
   - http服务
   - db.json  作为数据资源向外提供访问  支持CRUD（增删改查）

- 会设计restful api 接口
 - 需求
   - 新增一篇文章
     http://localhost:3000/posts  POST
     {
        .....
     }

    - 删除一篇文章
    http://localhost:3000/posts/1  DELE  删除文章1

    json-server  是一个支持restful api  设计的数据服务器

  - 全栈防抖
   - 前后端分离  解耦
    - 前端  live-server  5500端口
     fetch url  发送请求
    - 后端  json-server  3001端口
    url接口服务  restful
    - api 接口