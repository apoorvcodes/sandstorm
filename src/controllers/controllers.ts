import { buidlCreate, buidlUpdate } from './buidls';
import { userCreate, userDelete, userRead, userUpdate } from './users';
import { Router } from 'express';

const controllers: Router = Router();

controllers.post('/users/create', userCreate);
controllers.get("/users/read/:id", userRead);
controllers.put("/users/update/:id", userUpdate);
controllers.delete("/users/delete/:id", userDelete);

controllers.post("/buidls/create/:owner", buidlCreate);
controllers.put("/buidls/update/:id", buidlUpdate);


export { controllers };
