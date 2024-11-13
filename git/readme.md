- git 有哪些命令？
版本控制软件  多人协作  几个亿的项目
写项目？  电脑坏了  保存代码的版本且安全，团队间代码的协作
git 帮我们在本地 管理代码版本，   远程仓库（分布式）
git常用操作 自我代码管理和 团队协作
git init 初始化一个本地仓库
代码提交分三步
- 1.git add .                 把所有文件添加到暂存区
- 2.git commit -m ""          把暂存区的文件提交到本地仓库
- 3.git push origin master    把本地仓库的文件推送到远程仓库

- git log                   查看提交记录
- git branch  分支
- git checkout  切换分支
- git merge  合并分支

## 大厂需要的git能力
 - git是必备技能
 - 高级技巧 考点
 - git文档内置
   git help 查找常用的git命令
   git help -a  列出所有的名单
   vi 编辑器 ：j ：k 上下移动 ：q 退出 ：wq 保存退出
   git help add  深入了解add命令
   你是如何了解git命令的作用和参数的？


## 代码仓库
   文件夹->开发目录（网站）->  代码仓库
   - 好处
    项目代码版本（version） git关注的是代码的版本
    时光穿梭机  文件的任意版本  有时候我们要回退
   - git仓库里面存放的是啥？
    文件？  文件的版本（对）
    拿着相机一直拍
   - .git 目录 就是仓库
    git相关的内容就放在.git目录里面
  - git config  配置 操作留下了责任人， 多人协作的思想
    老板知道谁提交的代码
    git config --global user name ""  配置用户名
    git config --global user email ""  配置邮箱   本地 远程 比对
    配置  --global  全局

  - git status 
    当前仓库的状态
    on branch main  主分支上  默认分支
    untracked file  未跟踪文件  还没有纳入版本管理
    use commit

    添加到仓库是一件比较严谨的事情
    git add file
    将文件的当前版本  先添加到暂存区
     git status

    - 为什么需要暂存区， 仓库 两个概念
      - 后悔药
      - 分几次add  然后一次性commit
       进货   辆买菜车  （git add 多次） 买完了（git commit 一次） 买好菜了

    - git status
    让我们了解当前仓库的状态


    - git log
    代码提交记录
    --oneline  单行显示

    - 暂存区  仓库
      - 一次性多个文件多次加入暂存区， 后悔 ，组成一个提交逻辑（任务）
      - 一次commit -m 要规范  讲清楚任务
      不要随便提交commit  围绕开发需求
      一个上午  2-5次commit