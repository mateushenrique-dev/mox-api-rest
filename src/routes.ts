import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController'
import { GetAllCategoryController } from './controllers/GetAllCategoryController'
import { DeleteCategoryController } from './controllers/DeleteCategoryController'
const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoryController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);


export { routes }
