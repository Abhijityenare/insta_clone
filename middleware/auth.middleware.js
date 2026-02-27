const jwt = require('jsonwebtoken')

async function identifyUser(req,res,next){
     const token = req.cookies.token
    
    if(!token){
        return res.status(404).json({
            message:"unauthrized user"
        })
    }

    let decoded;
    try {
        decoded = jwt.verify(token,process.env.JWT_TOKEN)
    } catch (error){
        return res.status(401).json({
            message:"invalid token"
        })
    }

    req.user = decoded
    next()
}
module.exports = identifyUser