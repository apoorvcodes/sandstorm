import { userCreate } from './users';
import { Router } from 'express';

const controllers: Router = Router();

controllers.get('/users/create', userCreate);

export { controllers };
