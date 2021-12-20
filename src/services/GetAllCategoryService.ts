import { getRepository } from 'typeorm'
import { Category } from '../entities/Category'


class GetAllCategoryService{
  async  execute():Promise<Category[]>{
    const repository = getRepository(Category);

    const category = await repository.find()

    return category;
  }
}


export { GetAllCategoryService }
