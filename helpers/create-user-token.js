const jwt = require("jsonwebtoken")
require("dotenv").config()

const createUserToken = async(user, req, res) => {
    // create token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, `${process.env.JWT_SECRET}`)

    // return token
    res.status(200).json({
        message: "Voce esta autenticado",
        token: token,
        userId: user._id
    })
}

module.exports = createUserToken