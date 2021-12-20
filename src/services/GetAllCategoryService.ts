import { Category } from '../entities/Category'
import { repository } from '../repositories/categoryRepository'

class GetAllCategoryService{
  async  execute():Promise<Category[]>{

    const category = await repository.find()

    return category;
  }
}


export { GetAllCategoryService }
