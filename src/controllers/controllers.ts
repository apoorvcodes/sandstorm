import { buidlCreate, buidlDelete, buidlRead, buidlUpdate } from './buidls';
import { userCreate, userDelete, userRead, userUpdate } from './users';
import { mintNft } from './mint';
import { Router } from 'express';

const controllers: Router = Router();

controllers.post('/users/create', userCreate);
controllers.get('/users/read/:id', userRead);
controllers.put('/users/update/:id', userUpdate);
controllers.delete('/users/delete/:id', userDelete);

controllers.post('/buidls/create/:owner', buidlCreate);
controllers.put('/buidls/update/:id', buidlUpdate);
controllers.get('/buidls/read/:id', buidlRead);
controllers.delete('/buidls/delete/:id', buidlDelete);

controllers.get('/mint/:org/:user/:stage', mintNft);
export { controllers };
