function traverse(arr){
    const outlen=arr.length//1
    for(let i=0;i<length;i++){//1+n+1+n=2n+2
        const outlen=arr[i].length;//n  
        for(let j=0;j<inlen;j++){//n+n*(n+1)+n*n=2n*n+2n+2
            console.log(arr[i][j])//n*n
        }
    }
}
//T(n)=1+2n+2+n+2n*n+2n+2+n*n=3n*n+5n+3
//O(n^2)  把握主要矛盾  忽略次要  系数不重要
// 随着输入规模的增大   算法对应的执行总次数的一个变化趋势
