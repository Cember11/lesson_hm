//代码的可读性
function geneerateRandomGGender(){
   // return Math.random() > 0.5? '男' : '女'
   const genders=['male','female'];
   return genders[Math.floor(Math.random()*genders.length)]

}