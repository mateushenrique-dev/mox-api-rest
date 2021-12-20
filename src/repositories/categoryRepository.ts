import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';

export const repository = getRepository(Category);

