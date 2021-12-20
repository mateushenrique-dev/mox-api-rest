import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

type CategoryRequest = {
  name:string
  description:string
}


class CreateCategoryService{
 async execute({ name, description }: CategoryRequest):Promise<Category | Error>{
   const repository = getRepository(Category);

   const isExists =  repository.findOne({ name });

   if(isExists){
     return new Error('category already exists');
   }

    const category  = repository.create({ name, description });
    await repository.save(category)


    return category;
  }
}
