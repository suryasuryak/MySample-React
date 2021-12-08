const fs=require("fs")
const second=require("fs")

fs.readFile("package.json","utf-8",function(err,data){
    if(err) 
       console.log("file cannot be read")
    else
      console.log(data)
})

console.log("Independent logic >>>>>>>>>>>>>>>>>")