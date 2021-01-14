const Users = require("./model")
const bcrypt = require("bcryptjs")

function restrict() {
    return async (req, res, next) => {
        try {
            const {username, password} = req.headers
            if (!username || !password) {
                return res.status(401).json({
                    message: "You shall not pass!"
                })
            }
            const user = await Users.findBy({username}).first()
                if (!user) {
                    return res.status(401).json({
                        message: "You shall not pass!"
                    })
                }
            const passwordValid = await bcrypt.compare(password, user.password)
            if (!passwordValid) {
                return res.status(401).json({
                    message: "You shall not pass!"
                })
            }
            next()
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = {restrict}