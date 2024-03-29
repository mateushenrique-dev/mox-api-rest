import { Category } from '../entities/Category'
import {  repository } from '../repositories/categoryRepository';
import { CategoryUpdateRequest } from '../interfaces/categoryInterface';

class UpdateCategoryService{
  async execute({ name, id, description }: CategoryUpdateRequest ):Promise<Category | Error >{
    
    const isExistsCategory =  await repository.findOne(id);
    if(!isExistsCategory){
      return new Error('Category does not exists');
    }
    
    isExistsCategory.name = name ? name : isExistsCategory.name;
    isExistsCategory.description = name ? name : isExistsCategory.description;

    await repository.save(isExistsCategory);


    return isExistsCategory;

  }
}

export { UpdateCategoryService }
