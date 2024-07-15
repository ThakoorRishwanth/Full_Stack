var jwt = require('jsonwebtoken')

require('dotenv').config()

const auth = async(req, res, next)=>{
    const token = req.session.token;
    console.log("middlewares", req.token)

    if(!token){
        return res.status(401).json({message: "Token is not present or Token is not provided"})
    }

    // const token = req.headers.authorization.split(" ")[1];

    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET );
        req.user = decode;
        next()
    }
    catch(err){
        return res.status(401).json({message:"This is not a valid token"})
    }

    module.exports = auth
}