const getPaginedPokemons = ( async (limit, page) =>{
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginedPokemons = global.dataPokemons.slice(startIndex, endIndex);

        const pokemonsInfo = await Promise.all( paginedPokemons.map( async (pokemon) => {
            const response = await fetch(pokemon.url);

            if(response){
                const data = await response.json();

                const abilities = data.abilities.map(a=> a.ability.name)
                const stats = data.stats.map(s => { return{ name: s.stat.name, base: s.base_stat } })
                const types = data.types.map(t => t.type.name)

                return{
                    
                    id: data.id,
                    name: data.name,
                    img: data.sprites.other.dream_world.front_default || data.sprites.front_default || "https://i.pinimg.com/originals/46/e7/7e/46e77e3db6a6cdce8c63a9de331f31ff.png",
                    abilities,
                    stats,
                    types
                }
            }else{
                return null;
            }

        }))

    return{
        total: dataPokemons.length,
        page,
        limit,
        totalPages: Math.ceil(global.dataPokemons.length / limit),
        pokemons: pokemonsInfo
    };

})

export default{
    getPaginedPokemons
}