import { repository } from '../repositories/categoryRepository'

class DeleteCategoryService{
  async execute(id : string):Promise<void | Error>{
    const isExists = await repository.findOne(id);

    if(!isExists){
      return new Error('Category does not exists');
    }

    await repository.delete(id);
  }
}

export { DeleteCategoryService }
