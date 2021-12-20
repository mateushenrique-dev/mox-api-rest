import { Video } from '../entities/Video';
import { repository } from '../repositories/videoRepository';
import { repository as repositoryCategory } from '../repositories/categoryRepository';

type videoRequest = {
  name:string
  duration:number
  description:string
  category_id:string
}

class CreateVideoService{
  async execute({name, duration, description, category_id }: videoRequest):Promise<Video | Error> {

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
