import { UpdateVideoService } from '../services/UpdateVideoService';
import { Request, Response } from 'express'

class UpdateVideoController{
  async handle(request:Request, response:Response):Promise<Response>{
    const { name, description, duration, category_id } = request.body
    const { id } = request.params;

    const service = new UpdateVideoService();
    const result = await service.execute({ name, id, description, duration, category_id });

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}


export { UpdateVideoController }
