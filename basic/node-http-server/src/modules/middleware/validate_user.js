const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
    try{
        //let grab the accesstoken
const accessToken = req.headers.authorization.replace('Bearer ', '');

     //proceed to do the decoding of the access token
     const decodedData = jwt.verify(accessToken, process.env.JWTSECRET);
     console.log( "from middle ware", decodedData);

     req.userData = decodedData;
    next();
    } catch(error){
        return res.status(401).json({message: "Unauthorized" }) }
}
module.exports = validateUser;