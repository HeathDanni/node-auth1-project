const db = require("../database/config")

module.exports = {
    find,
    findById,
    add,
    findBy,
    
}

//finds all users
function find() {
    return db("users").select("id", "username")
}

//finds user by id
function findById(id) {
    return db("users")
        .where({id})
        .first()
}

//creates user
async function add(user) {
    const [id] = await db("users")
        .insert(user)
        return findById(id)
}

//finds user by either id, username, or password
function findBy(filter) {
    return db("users")
        .select("id", "username", "password")
        .where(filter)
}


