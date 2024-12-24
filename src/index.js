import app from './app.js';
import { connectionDB } from './Data/connectionDB.js';
import { getPokemons } from './Services/StartupService.js';

//Connection to mongodb
const PORT = 3000;

//Connection to database
connectionDB();

//Obtener los pokemones
await getPokemons();

app.get('/hola', (req, res) =>{
    console.log("endpoint :3");
    res.send("Hello");
})

//Init server
app.listen(PORT, () =>{
    console.log("Server opened on port " + PORT);
})