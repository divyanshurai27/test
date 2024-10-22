// const sum =(a,b) => {
//     return a + b;
// }
// const ans = sum(1,2);
// console.log(ans);
// application.get("/",(req,res) =>{

// })

// given an aaray, give me back a new array in which value  is multilied by 2
//[1,2,3,4,5]
//[2,4,6,8,10]
//  const input = [1,2,3,4,5];
// // const newArray = [];
// // for(let i =0;i<input.length;i++){
// //     newArray.push(input[i]*2);
// // }
// // console.log(newArray);
// function transform(i){
//     return i * 2;
// }
// const ans = input.map(transform);
// console.log(ans);

// filtering 
 const arr = [1,2,3,4,5,];

 function filterlogic(n){
    if(n % 2 == 0){
        return true;
    }else {
        return false;
    }
 }
 
 const ans = arr.filter(filterlogic);
 console.log(ans);