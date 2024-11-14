
import dotenv from 'dotenv'
// 从 openai 模块中导入 OpenAI 类
import OpenAI from "openai";
dotenv.config();

// 使用提供的 API 密钥和自定义的基础 URL 创建一个新的 OpenAI 实例
const client = new OpenAI({
    // 设置 API 密钥，用于验证 API 请求
    apiKey: process.env.OpenAI_API_KEY,
    // 设置基础 URL，指定 API 请求的目标地址
    baseURL: 'https://api.302.ai/v1' // 转发
});
//函数声明
// function main() {
//     console.log('ai 全栈开始了')
// }
// 良好的编程风格
//主函数  执行入口  单点
//es6 箭头函数  比传统函数更简洁
//赋值语句
//js中函数也是对象
//编译阶段进行了const main的声明  在执行阶段对main赋值为一个函数
//async时函数修饰符 + await  一对
const main = async () => {
    // openai 的调用是异步的 
    // await 等会儿
    // chat 聊天的方式调用
    // completions 完成问答
    // create 创建
    try {
     const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            {
                role: 'user',//角色
                content: [
                    {
                        type: 'text',
                        'text': '请描述以下图片的内容'
                    },
                    {
                        type: 'image_url',
                        "image_url": {
                            "url": "https://img.huxiucdn.com/img/minitopic/202406/25/084826659075.jpg?imageView2/1/w/512/h/512/|imageMogr2/strip/interlace/1/quality/85"
                        }
                    }
                ]
            }
        ],
        max_tokens: 300
    })
    console.log(response.choices[0].message.content)

} catch (error) {
    console.log(error)
}
   
}

main()