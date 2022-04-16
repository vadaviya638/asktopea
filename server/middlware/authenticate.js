const jwt = require("jsonwebtoken")
const User = require("../model/usershema")


const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY)

        const rootuser = await User.findOne({_id: verifytoken._id,"tokens.token": token })

        if (!rootuser) { throw new error("user not found") }
        req.token = token
        req.rootuser = rootuser
        req.userId = rootuser._id

        next();

    } catch (error) {
        res.status(401).send("unauthorized:no token provided")
        console.log(error);
    }
}
module.exports = authenticate