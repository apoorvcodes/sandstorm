import {Request, Response, NextFunction} from "express"
export interface middlewareInterface {
  name: string;
  position: string;
  run: (req:Request, res:Response,  next: NextFunction) => void
}

export interface FileRouteInterface {
  method: string;
  run: (req:Request, res:Response,  next: NextFunction) => void
}

export interface FileSystemMiddlewareInterface {
  middlewareDir: string;
  routerDir: string;
  log?: boolean;
}