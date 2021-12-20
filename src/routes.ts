import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController'
const routes = Router();

const createCategoryController = new CreateCategoryController()
routes.post('/categories', createCategoryController.handle);


export { routes }
