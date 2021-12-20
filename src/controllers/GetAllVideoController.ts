import { Request, Response } from 'express';
import { GetAllVideoService } from '../services/GetAllVideoService';

class GetAllVideoController{
  async handle(request:Request, response:Response):Promise<Response>{
    const service = new GetAllVideoService();

    const result = await  service.execute()

    return response.json(result);
  }
}

export  { GetAllVideoController }
