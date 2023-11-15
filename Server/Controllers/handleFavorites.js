let myFavorites = []

const postFav = (req, res) => {

// ? req.body --> {id, name, status} = req.body
//! ojo si viene un id repetido
myFavorites.push(req.body)
res.json(myFavorites)

}

const deleteFav = (req, res) => {
    const {id} = req.params //! "5"
    const filtered = myFavorites.filter(fav => fav.id !== Number(id))
    myFavorites = filtered
    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}