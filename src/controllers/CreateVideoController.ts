import { Request, Response } from 'express';
import { CreateVideoService } from '../services/CreateVideoService'
class CreateVideoController{
  async handle(request:Request, response:Response): Promise<Response | Error >{
    const { name, duration, description, category_id } = request.body;

    const services = new CreateVideoService();

   const result =  await services.execute({ name , duration, description, category_id })

   if(result instanceof Error){
     return response.status(400).json(result.message);
   }

   return response.json(result);
  }
}

export { CreateVideoController }
