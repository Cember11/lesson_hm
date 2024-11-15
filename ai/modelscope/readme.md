# 魔搭社区
> 国内最大ai模型开发平台

## 大模型 LLM  Large（参数规模） Language Model
- 输入-> code-> 输出  //传统的开发方式
- 输入（promote）-> LLM(大模型) -> 输出  // 最酷的开发方式
- 参数规模单位是？  LLM训练出来的参数 上百亿 全球的知识

- 首选大模型
  为了业务，选择合适的大模型
   openai  花费比较高
   coze 豆包模型，qwen，kimi开源的

 - 魔搭社区 
   国内最大的开源大模型社区

 - 云端ai环境  
 - 机器学习 nlp
 - python的语法
   - module 模块  复用  职责分离
    from modelscope.popelines import pipeline
    modelscope 魔搭社区  pipeline 管道（npl派出管道，水管）
- 'damo/nlp structbert sentiment-classification-base
  模型有很多种  达摩院/情感分析/分类  支持中文
  医疗模型  /金融模型/法律模型/
   pipeline(Tasks.text_classification)

  'damo/nlp structbert sentiment-classification-base
   pipeline 打开管道
   选择一项任务 Tasks.text_classification
   选择模型  'damo/nlp structbert sentiment-classification-base


- 模型训练完后就不成长了，新的知识没有，不太准确
  微调大模型  喂一些数据  并对这些数据进行标注

- 前后端为何要学LLM？
   - 端模型的时代到来了
      小尺寸模型越来越强  AI手机  AI汽车  （Robotaxi） 
  - Marscode  提高学习和开发效率
  - 很多工作可以交给大模型
  输入-》LLM-》输出

- LLM需要算力  来自GPU
