const PokemonService = module.exports;
const PokemonModel = require('../models/pokemon.json')
const PokemonResource = require('../resources/PokemonResource');

PokemonService.getCaptured = async () => {
    return PokemonModel.captured
}

PokemonService.getCapturedByName = async (name) => {
    console.log(name)
    const captured = PokemonModel.captured;

    const isCaptured = captured.find( pk => pk.name === name);

    if(isCaptured){
        return isCaptured
    }else {
        return {
            "error": "Not Captured yet"
        }
    }
}

PokemonService.getPokemonByName = async (name) => {
    console.log(name)

    return await PokemonResource.getPokemonByName(name);

}
