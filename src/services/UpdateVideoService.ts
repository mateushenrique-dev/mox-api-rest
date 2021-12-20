import { Video } from '../entities/Video'
import { getRepository } from 'typeorm';

type VideoUpdateRequest = {
  id:string
  name:string
  description:string
  duration:number
  category_id:string
}


class UpdateVideoService{
  async execute({ name, id, description, duration, category_id }: VideoUpdateRequest ):Promise<Video | Error >{
    const repository = getRepository(Video);

    const isExistsCategory =  await repository.findOne(id);
    if(!isExistsCategory){
      return new Error('Category does not exists');
    }
    
    isExistsCategory.name = name ? name : isExistsCategory.name;
    isExistsCategory.duration = duration ? duration : isExistsCategory.duration;
    isExistsCategory.category_id = category_id ? category_id : isExistsCategory.category_id;
    isExistsCategory.description = description ? description : isExistsCategory.description;

    await repository.save(isExistsCategory);


    return isExistsCategory;

  }
}

export { UpdateVideoService }
