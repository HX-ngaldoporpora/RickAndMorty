const users = require('../Utils/users.js')

const login = (req, res) => {
    // clg(req.query) = {email: "na@mail", password: "1234"}
    // URL ?email=na@mail&password=1234
    const {email, password} = req.query
let access = false;

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            access = true
        }
    })
    res.json({access}) 
}

//! que pasa si pongo un usuario incorrecto? Veo algun error?

module.exports = login;