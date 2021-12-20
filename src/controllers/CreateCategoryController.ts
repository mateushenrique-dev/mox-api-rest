import { Request, Response } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService'

class CreateCategoryController{
  async handle(request:Request, response:Response):Promise<Response>{
    const service = new CreateCategoryService();
    
    const { name, description } = request.body
    const result = await service.execute({ name, description });

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result)
  }
}

export { CreateCategoryController }


