function fun(x,n){
    if(n===0) return 1;
    //把问题分解成规模更小的子问题  自顶向下
    return x*fun(x,n-1);
}
