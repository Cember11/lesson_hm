  function greet(name){
    return `hello , ${name}!`

  }

  greet('wql')
 
 //在函数上面添加属性
  greet.language= 'en'
  greet.greetInspanish=function(name){


  }

  function invokeGreeting(greetingFunction,name){
    return greetingFunction(name)

  }
  console.log(invokeGreeting(greet,'wql'));