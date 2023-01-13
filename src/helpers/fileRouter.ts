import { Express, RequestHandler } from 'express';
import { readdirSync, lstatSync } from 'fs';
import path from 'path';

import type { FileSystemMiddlewareInterface } from '../interfaces/handler';

export class FileSystemRouter {
  private options: FileSystemMiddlewareInterface;
  public mid: [
    {
      name: string;
      handler: RequestHandler;
    }
  ];
  public route: [
    {
      method: string;
      handler: RequestHandler;
      path: string;
    }
  ];
  constructor(options: FileSystemMiddlewareInterface) {
    this.options = options;
  }

  public get settings() {
    return {};
  }

  public middlewares(_: Express): void {
    const middlewarePath: string = path.join(
      process.cwd(),
      this.options.middlewareDir
    );

    readdirSync(middlewarePath).forEach(async (file: string) => {
      const middleware = await import(`${middlewarePath}/${file}`);
      this.mid.push({
        name: middleware.middleware.name as string,
        handler: middleware.middleware.run as RequestHandler
      });
    });
  }

  private async logFile(file: string, path: string, _: Express) {
    if (file.endsWith('.js') || file.endsWith('.ts')) {
      const code = await import(`${path}/${file}`);

      if (!code.route) throw new Error('Sunrit implement');

      const regex = /\[(\w+)\]/;
      const result = file.match(regex);

      if (result) file = ':' + result[1];

      let rmPath = path
        .replace(process.cwd(), '')
        .replace('/' + this.options.routerDir, '');

      let routePath: string = '';

      routePath = rmPath + '/' + file.replace('.ts', '');
      this.route.push({
        method: code.route.method as string,
        handler: code.route.run as RequestHandler,
        path: routePath as string
      });
    }
  }

  private logDirectory(file: string, _: Express) {
    readdirSync(file).forEach(async (dir: string) => {
      const dirFile = await lstatSync(`${file}/${dir}`);

      if (dirFile.isDirectory()) {
        this.logDirectory(`${file}/${dir}`, _);
      }

      if (dirFile.isFile()) {
        await this.logFile(dir, file, _);
      }
    });
  }

  public logRoutes(_: Express) {
    const routePath: string = path.join(process.cwd(), this.options.routerDir);

    readdirSync(routePath).forEach(async (dir: string) => {
      const file = await lstatSync(`${routePath}/${dir}`);

      if (file.isDirectory()) {
        this.logDirectory(`${routePath}/${dir}`, _);
      }

      if (file.isFile()) {
        await this.logFile(dir, routePath, _);
      }
    });
  }

  public mutate(app: Express) {
    this.middlewares(app);
    this.logRoutes(app);
  }
}
