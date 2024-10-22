function square(n){
    return  n * n ;
}
function cube(n){
    return n * n * n;
}

//fn can also be written as callback
function sumofsomething(a,b,fn){
  const  var1 = fn(a);
  const  var2 = fn(b);
    return var1 + var2
}
const ans =sumofsomething(5,10,square)
console.log(ans)