import  express  from 'express';
import  pokemonsController  from '../Controllers/pokemons.controller.js';

const router = express.Router();

router.get('', pokemonsController.getPokemons);
router.get('/hola', pokemonsController.hello);
router.get('/no', pokemonsController.no);

export default router;
