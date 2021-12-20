import { getRepository } from 'typeorm';
import { Video } from '../entities/Video';

export const repository = getRepository(Video);
