const PokemonResource = module.exports;
const fetch = require("node-fetch");

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/';

PokemonResource.getPokemonByName = async (name) => {
    try {
        const params = {
            method: 'GET',
            headers,
            json: true,
        }

        const response = await fetch(`${pokeURL}/${name}`, params)
        .then(res => res.json());

        return response && typeof response === 'string' ? JSON.parse(response) : response

    } catch (error) {
        throw new Error(error + " Can't get Pokemon")
    }
}