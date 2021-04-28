import {Router} from 'express';
import CriptoMoedaController from './controllers/CriptoMoedaController';

const routes = Router();
const criptoMoedaController = new CriptoMoedaController();



routes.get("/moedas/listar", criptoMoedaController.index);
routes.get("/moedas/listar/filtrarPorNome/:name", criptoMoedaController.findByName)
routes.get("/moedas/listar/:id", criptoMoedaController.findById)
routes.post("/moedas/criar", criptoMoedaController.create);

export default routes;