const router = require('express').Router();
const PokemonController = require('./controllers/PokemonController.js')

router.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})

router.get(
    '/captured',
    PokemonController.getCaptured,
)

router.get(
    '/captured/:name',
    PokemonController.getCapturedByName,
)

router.get(
    '/wild/:name',
    PokemonController.getPokemonByName,
)


module.exports = router;