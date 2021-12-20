import { getRepository } from 'typeorm'
import { Category } from '../entities/Category';
import { Video } from '../entities/Video';


type videoRequest = {
  name:string
  duration:number
  description:string
  category_id:string
}

class CreateVideoService{
  async execute({name, duration, description, category_id }: videoRequest):Promise<Video | Error> {
    const repositoryCategory = getRepository(Category);
    const repository = getRepository(Video);

    const isExists = await repositoryCategory.findOne(category_id);

    if(!isExists){
      return new Error('Category does not exists');
    }

    const video = repository.create({ name, duration, description, category_id });

    await repository.save(video);
    return video;
  }
}

export { CreateVideoService }
