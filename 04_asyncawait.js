function kiratsinghFunction(){
    let p =new Promise(function(resolve){
    setTimeout(function(){
        resolve("hi there")
    },1000)
});

    return p;
    }
    async function main() {
     const value =await kiratsinghFunction();
     console.log(value);
    //no callback,no .then syntax
    };
main();
    
    