var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const ops=require('../db/dbops')

// load up the user model



module.exports = function(passport) {

console.log("----------------------------------------");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("Bearer");
opts.secretOrKey = "express-secret-key"
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    console.log(jwt_payload)
    if(jwt_payload.username){
       let pass = await ops.getPassword(jwt_payload.username)
       console.log(jwt_payload)
       if(pass==jwt_payload.password)
             done(null,{user:jwt_payload.username})
       else
             done(null,false)
    }
       else
             done(null,false)
  }))
}