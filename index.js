const express = require("express")
const userRouter = require("./users/router")
const db = require("./database/config")

server = express()
const port = process.envPort || 4000

server.use(express.json())
server.use(userRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})