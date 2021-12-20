import { Category } from '../entities/Category';
import {  repository } from '../repositories/categoryRepository';
import { CategoryRequest } from '../interfaces/categoryInterface';

class CreateCategoryService{
 async execute({ name, description }: CategoryRequest):Promise<Category | Error>{
   
   const isExists = await repository.findOne({ name });

   if(isExists){
     return new Error('category already exists');
   }

    const category  = repository.create({ name, description });
    await repository.save(category)


    return category;
  }
}


export { CreateCategoryService }
