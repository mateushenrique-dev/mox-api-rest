import { Router } from 'express';

//Category
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoryController } from './controllers/GetAllCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';

//Video
import { CreateVideoController } from './controllers/CreateVideoController';
import { GetAllVideoController } from './controllers/GetAllVideoController';
import { UpdateVideoController } from './controllers/UpdateVideoController';

const routes = Router();

//Category
routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoryController().handle);
routes.delete('/categories/:id', new DeleteCategoryController().handle);
routes.put('/categories', new UpdateCategoryController().handle);

//Video
routes.post('/video', new CreateVideoController().handle);
routes.get('/video', new GetAllVideoController().handle);
routes.put('/video/:id', new UpdateVideoController().handle);



export { routes }
