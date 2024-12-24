import  express  from 'express';
import cors from 'cors';
import  pokemonsRoutes  from './Routes/pokemons.routes.js'

const app = express();

//Confugurations
app.use(cors());

//Configurarlo manualmente
//const corsOptions = {
//    origin: 'http://localhost:',
//    methods: 'GET, POST, PUT, DELETE',
//     allowedHeaders: 'Content'    
//}

//Routes
app.use('/pokemons', pokemonsRoutes);

export default app;