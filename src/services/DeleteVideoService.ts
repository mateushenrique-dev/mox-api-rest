import { getRepository } from 'typeorm';
import { Video } from '../entities/Video';

class DeleteVideoService{
  async execute(id : string):Promise<void | Error>{
    const repository = getRepository(Video);
    const isExists = await repository.findOne(id);

    if(!isExists){
      return new Error('Video does not exists');
    }

    await repository.delete(id);
  }
}

export { DeleteVideoService }
