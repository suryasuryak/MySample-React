const db=require('./dbconfig')

const dbops= {
    addPerson: function(sno,name,city,callback){
        db.query("insert into person values(?,?,?)",[sno,name,city],callback);
    },

    getPeople: function(callback){
        db.query("select * from person",callback)
    },
    getOne: function(sno,callback){
        db.query("select * from person where sno=?",[sno],callback)
    },
    updateOne :function(sno,name,city,callback){
        db.query("update person set name=?,city=? where sno=?",[name,city,sno],callback)
    },
    createUser:function(username,password,callback){
        db.query("insert into users values(?,?) ",[username,password],callback)
    },
    getUser:function(username,callback){
        db.query("select * from users where username=?",[username],callback)
       },
    getPassword:sendPassword
}

function sendPassword(username){
    return new Promise(function(resolve,reject){
        dbops.getUser(username,function(err,data){
            if(err) 
               reject(err)
            else 
               resolve(data[0]?data[0].password:undefined)
        })
    })
}

module.exports=dbops;