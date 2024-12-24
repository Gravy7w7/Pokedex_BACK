import searchPokemon from '../Models/SearchPokemon.model.js'

//Get to pokeapi to charge all pokemons
//Función asincrona ya que debemos esperar a que los awaits finalicen
export async function getPokemons(){

    try{
    
        //Debe de colocarse await
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')

        if(!response.ok){
            throw new Error('Http error, Status:' + response.status);
        }

        //Guardar data
        const data = await response.json();
        const dataPokemons = data.results;

        //Crear objetos pokemones para acceder al name, url y al pokemon en si
        var pokemons = dataPokemons.map(item => new searchPokemon(item.name, item.url));

        pokemons = sortPokemons(pokemons);

        global.dataPokemons = pokemons;

    }catch(error){
        console.log("Error: ", error);
    }

}

//Funcion que ordena alfabeticamente los pokemones
function sortPokemons(data){
    data.sort((a,b) =>{
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })

    return data;
}