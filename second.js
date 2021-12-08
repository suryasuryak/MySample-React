

const fun=function(){
    console.log("GREAT DAY")
}

const items={  
    fruits: ['Orange','Apple','Mango'],
    vegetables:['Onion','Tomato','Brinjal']
}

class Entity{

    constructor(x,y){
        this.x=x
        this.y=y
    }
    
    display(){
        console.log(this.x,this.y)
    }
}

module.exports =  {today: fun,Item:Entity,things:items}
module.exports.execute=function(){
    console.log("execution... started")
}