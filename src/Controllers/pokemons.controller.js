import pokemonsService from "../Services/pokemons.service.js";

const hello = async(req, res) => {
    res.send("hello");
}

const no = async (req, res)=>{
    res.send(global.dataPokemons);
}

const getPokemons = ( async (req, res) =>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 15;
    const keyword = req.query.keyword || '';

    const result = await pokemonsService.getPaginedPokemons(limit,page, keyword);

    res.json(result);
})

//exportar lista
export default{
    hello,
    no,
    getPokemons
}