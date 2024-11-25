# Prompt 设计模式


 - 吴恩达  Prompt Engineering

 - LLM 开发的模板
   - 代码工程
   1. npm init -y
   2. 将dependencies：{}部分拷贝过去
     npm i
     node  后端项目的依赖

- dotenv 的理解
  - process.env对象
  - key 不能在代码中以明文出现  （为了保证我们key的安全性）
  - 项目的根目录下添加一个.env文件，包含Key的信息
  - 不能提交到GitHub  .gitignore  添加这类文件的声明
  - dotenv.config()方法 将.env 读入process.env 对象中

- 了解prompt 设计模式，开发功能需求prompt模板  AI应用
  - 总结模板