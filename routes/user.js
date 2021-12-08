var express=require("express")
var route = express.Router();
var ops=require("../db/dbops")
var security=require('../security/security')
const jwt=require("jsonwebtoken");

route.post("/signup",async (request,response)=>{
    
    const {username,password}=request.body
    const encrypted=await security.encrypt(password)
    console.log(encrypted)
    ops.createUser(username,encrypted,function(err,data){
        if(err)
           response.status(500).send("Unable to create user",err)
        else{
            console.log("user created")
            response.status(200).send("user Created")
        }
    })
})

route.post("/signin",async (request,response)=>{
    
    const {username,password}=request.body
    const originalPassword=await ops.getPassword(username)
    const result = await security.compare(password,originalPassword)
    if(result==true){
        let token=jwt.sign({username:username,password:originalPassword},"express-secret-key")
        // response.send("user is valid")
        response.json({status:"success",access_token:token})
    }
    else
        response.status(500).send("Not valid")
  //  const encrypted=await security.encrypt(password)

})
module.exports=route;