import { repository } from '../repositories/videoRepository';

class DeleteVideoService{
  async execute(id : string):Promise<void | Error>{
    const isExists = await repository.findOne(id);

    if(!isExists){
      return new Error('Video does not exists');
    }

    await repository.delete(id);
  }
}

export { DeleteVideoService }
