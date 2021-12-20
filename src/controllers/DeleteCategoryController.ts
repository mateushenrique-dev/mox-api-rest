import { DeleteCategoryService } from '../services/DeleteCategoryService';
import { Request, Response } from 'express'
class DeleteCategoryController{
  async handle(request:Request, response:Response):Promise<Response | void >{
    const { id } = request.params

    const service = new DeleteCategoryService();
    const result = await service.execute(id);

    if(result instanceof Error){
     return response.status(401).json(result.message);
    }

    return response.status(201).end();

  }
}
