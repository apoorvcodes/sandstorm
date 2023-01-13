import { userCreate } from './users';
import { Router } from 'express';

const controllers: Router = Router();

controllers.post('/users/create', userCreate);

export { controllers };
