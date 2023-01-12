import { Express } from "express";
import { readdirSync, lstatSync } from "fs";
import path from "path";

import type { FileSystemMiddlewareInterface } from "../interfaces/handler";

export class FileSystemRouter {
  private options: FileSystemMiddlewareInterface;

  constructor(options: FileSystemMiddlewareInterface) {
    this.options = options;
  }

  public get settings() {
    return {};
  }

  public middlewares(app: Express): void {
    const middlewarePath: string = path.join(
      process.cwd(),
      this.options.middlewareDir
    );

    readdirSync(middlewarePath).forEach(async (file: string) => {
      const middleware = await import(`${middlewarePath}/${file}`);
      app.use(middleware.middleware.run);
    });
  }

  private async logFile(file: string, path: string, app: Express) {
    if (file.endsWith(".js") || file.endsWith(".ts")) {
      const code = await import(`${path}/${file}`);

      if (!code.route) throw new Error("Sunrit implement");

      const regex = /\[(\w+)\]/;
      const result = file.match(regex);

      if (result) file = ":" + result[1];

      let rmPath = path
        .replace(process.cwd(), "")
        .replace("/" + this.options.routerDir, "");

      let routePath: string = "";

      routePath = rmPath + "/" + file.replace(".ts", "");
      //@ts-ignore
      app[code.route.method](routePath, code.route.run);
    }
  }

  private logDirectory(file: string, app: Express) {
    readdirSync(file).forEach(async (dir: string) => {
      const dirFile = await lstatSync(`${file}/${dir}`);

      if (dirFile.isDirectory()) {
        this.logDirectory(`${file}/${dir}`, app);
      }

      if (dirFile.isFile()) {
        await this.logFile(dir, file, app);
      }
    });
  }

  public logRoutes(app: Express) {
    const routePath: string = path.join(process.cwd(), this.options.routerDir);

    readdirSync(routePath).forEach(async (dir: string) => {
      const file = await lstatSync(`${routePath}/${dir}`);

      if (file.isDirectory()) {
        this.logDirectory(`${routePath}/${dir}`, app);
      }

      if (file.isFile()) {
        await this.logFile(dir, routePath, app);
      }
    });
  }

  public mutate(app: Express) {
    this.middlewares(app);
    this.logRoutes(app);
  }
}