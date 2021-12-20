import { UpdateCategoryService } from '../services/UpdateCategoryService'
import { Request, Response } from 'express'

class UpdateCategoryController{
  async handle(request:Request, response:Response):Promise<Response>{
    const { name, description, id  } = request.body
    const service = new UpdateCategoryService();
    const result = await service.execute({ name, id, description });

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}


export { UpdateCategoryController }
