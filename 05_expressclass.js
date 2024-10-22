//creating an http server 
// express
// node default  librabry => no
//
//  const express = require("express")

// const app = express();
// app.use(express.json());
// app.get("/" ,function(req,res){// req, res = request and respond
//  res.send("hi there");
// })
// app.listen(3003);
const express = require('express');
const app = express();


const users = [
    {
        name: "john",
        kidneys: [
            {
                healthy: false
            }
        ]
    }
];
app.use(express.json());
// GET route
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numbersOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    
    const numberOfUnhealthyKidneys = numbersOfKidneys - numberOfHealthyKidneys;
    
    res.json({
        numbersOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    });
});

// POST route
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    
    users[0].kidneys.push({
        healthy: isHealthy
    });
    
    res.json({
        msg: "Done!"   
    })
})
 app.put("/",function(req,res){
 for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
 }
 res.json({});
})
app.delete("/",function(req,res){
    const newkidneys = [];
    for(i=0;i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({msg:"done"})
})

// Server listening on port 3003
app.listen(3006);