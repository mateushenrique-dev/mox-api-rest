import { Video } from '../entities/Video'
import { repository } from '../repositories/videoRepository'

class GetAllVideoService{
  async  execute():Promise<Video[]>{
    const video = await repository.find(
      {
        relations: ['category']
      }
    );

    return video;
  }
}


export { GetAllVideoService }
