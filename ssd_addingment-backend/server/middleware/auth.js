const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
    const user_name = req.headers['user_name']

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    // const decoded = jwt.verify(token, "config.TOKEN_KEY");
    
    // req.user = decoded;
    // return next();
    
    const decode_token = JSON.parse(atob(token.split(".")[1]))
    if(decode_token.user_name == user_name){
      return next();
    }
  } catch (err) {
    console.log("err",err)
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
