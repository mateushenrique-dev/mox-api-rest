import { Video } from '../entities/Video'
import { repository } from '../repositories/videoRepository'
import { VideoUpdateRequest } from '../interfaces/videoInterface';
class UpdateVideoService{
  async execute({ name, id, description, duration, category_id }: VideoUpdateRequest ):Promise<Video | Error >{

    const isExistsCategory =  await repository.findOne(id);
    if(!isExistsCategory){
      return new Error('Video does not exists');
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
