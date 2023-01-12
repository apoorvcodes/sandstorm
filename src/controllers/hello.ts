import { Response, Request } from 'express';
import { FileRouteInterface } from 'src/interfaces/handler';
export const route: FileRouteInterface = {
  method: 'GET',
  run: (req: Request, res: Response): void => {
    console.log('runs');
    res.send(req.path);
  }
};
