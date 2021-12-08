var express=require("express")
var route = express.Router();
var ops=require("../db/dbops")
const passport=require("passport")
require('../security/passportfun')(passport)

route.get("/people",passport.authenticate('jwt', {session: false}), function(request,response){
   ops.getPeople(function(err,data){
       if(err){
           response.status(500).send("Server issue")
       }
       else{
           response.json(data)
       }

   })
})

route.post("/people",function(request,response){
   
    const {sno,name,city}=request.body
    ops.addPerson(sno,name,city,function(err,data){
        if(err){
            response.status(500).send("Unable to insert")
        }
        else{
             response.status(201).send(request.body)
        }
    })
 })
 
 
 route.get("/people/:sno",function(request,response){
   ops.getOne(request.params.sno,function(err,data){
     if(err){
         response.status(500).send("Server error")
     }
     else
         response.send(data[0]?data[0]:"No Record Found")
   })
 })
module.exports=route;