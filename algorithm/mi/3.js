function fun(x,n){
    if(n===0) return 1;
//自顶向下
    let t=fun(x,Math.floor(n/2))
    if(n%2===0) {
        return t*t;
    } //偶数t^2{}
   else {
        return t*t*x;
    } //奇数t^2*x
  
}