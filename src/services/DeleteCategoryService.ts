import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

class DeleteCategoryService{
  async execute(id : string):Promise<void | Error>{
    const repository = getRepository(Category);
    const isExists = await repository.findOne(id);

    if(!isExists){
      return new Error('Category does not exists');
    }

    await repository.delete(id);
  }
}

export { DeleteCategoryService }
