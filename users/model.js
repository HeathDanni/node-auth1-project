const db = require("../database/config")

module.exports = {
    add,
    findBy,
    find
}

//creates login
async function add(user) {
    const [id] = await db("users")
        .insert(user)
        return findById(id)
}

//finds user by either id, username, or password
async function findBy(filter) {
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}

//finds all users
async function find() {
    return db("users").select("id", "username")
}

