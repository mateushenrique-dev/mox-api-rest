import { getRepository } from 'typeorm'
import { Video } from '../entities/Video'


class GetAllVideoService{
  async  execute():Promise<Video[]>{
    const repository = getRepository(Video);

    const video = await repository.find()

    return video;
  }
}


export { GetAllVideoService }
