const router = require('express').Router()

// Controllers
const login = require('../Controllers/login')
const getCharById = require('../Controllers/getCharById')
const {deleteFav, postFav} = require('../Controllers/handleFavorites')


// "https://rickandmortyapi.com/api/character/5" --> res.params --> {id:5}
router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav )

module.exports = router


/*
App (client)
<Routes>
<Route path={'/'} element={<Login>}/> ----> componente o la vista que vamos a estar renderizando... Login, About Us, FAQ, Contact Us

Inder (Server)
router.get("/") --> Accion lleva a cabo, login




*/
