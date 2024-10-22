function kiratsinghFunction(){
let p =new Promise(function(resolve){

    resolve("hi there");
});
return p;
}
const value = kiratsinghFunction();
value.then(function(data){
    console.log(data)

})

