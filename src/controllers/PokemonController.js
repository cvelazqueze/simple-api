const PokemonController = module.exports;
const PokemonService = require('../services/PokemonService.js')

PokemonController.getCaptured = async (req, res, next) => {
    const {options = {}} = req
    try {
        const response = await PokemonService.getCaptured();
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(response));
        res.end();

    } catch (error) {
        return next('ERROR: Could not getCaptured' + options)
    }
}

PokemonController.getCapturedByName = async (req, res, next) => {
    const {options = {}} = req
    try {
        const {
            params:
            {
                name
            }
        } = req

        const response = await PokemonService.getCapturedByName(name);
        console.log(response)
        
        res.write(JSON.stringify(response));
        res.end();

    } catch (error) {
        return error
    }
}

PokemonController.getPokemonByName = async (req, res, next) => {
    const {options = {}} = req
    try {
        const {
            params:
            {
                name
            }
        } = req

        const response = await PokemonService.getPokemonByName(name);
        
        res.write(JSON.stringify(response));
        res.end();

    } catch (error) {
        return error
    }
}