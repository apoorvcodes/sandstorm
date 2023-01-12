import { Response, Request, NextFunction } from "express";
import { middlewareInterface } from "src/interfaces/handler";
import { cristal } from "gradient-string";
export const middleware: middlewareInterface = {
  name: "basicLogger",
  position: "before",
  run: (req:Request, res:Response, next: NextFunction): void => {
    console.log(cristal("------------------------------"));
    const time = new Date().toISOString();
    console.log(
      cristal(
        `Time: ${time}\nMethod: ${req.method}\nPath: ${req.path}\nParams: ${
          req.params
        }\nHeaders: ${req.headers}}`
      )
    );

    console.log(cristal("------------------------------\n"));
        }
};