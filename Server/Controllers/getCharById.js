
const axios = require("axios")
//const URL = "https://rickandmortyapi.com/api/character"
require('dotenv').config()
const {URL} = process.env

const getCharById = async (req, res) => {
    try {
      const { id } = req.params;
      /* const { status, name, species, origin, image, gender, error } = await axios(
        `${URL}/${id}`
      ).data; */
      const { data } = await axios(`${URL}/${id}`);
      const { status, name, species, origin, image, gender, error } = data;
      const character = { id, status, name, species, origin, image, gender };
      return name
        ? res.json(character)
        : res.status(404).json({ message: error });
    } catch (reason) {
      return res.status(500).json({ message: reason });
    }
  };

module.exports = getCharById




// ! CON HTTP

// const successHandler = (response, res) => {
//     // console.log (response)
//     const { id, name, gender, species, origin, image ,status} = response.data
//     const character = { id, name, gender, species, origin, image ,status}
//     res.writeHead(200, {"Content-type": "application/json"})
//     res.end(JSON.stringify(character))
// }

// const errorHandler = (error, res) => {
//    // console.log(error)
//     res.writeHead(500, {"Content-type": "text/plain"})
//     res.end("Sucedió el siguiente error: " + error.message)
// }


// const getCharById = (res, id) => {
//     axios(`${URL}/${id}`)
//     .then(response =>  successHandler(response, res), error => errorHandler(error, res))
//    // .catch(error => errorHandler(error, res))
// }

// module.exports = getCharById;

/*

.then (successHandler, errorHandler)

FETCH
fetch(url)
.then(a => b, error => alert(error sobre el fetch))
.then(b => c)
.then(c => d)
.catch(error = > alert())

*/