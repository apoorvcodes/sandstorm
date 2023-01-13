import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import { HOST, PORT } from './constants';
import cors from "cors"
import { middleware } from './middlewares/logger';
config();
const app: Express = express();

app.use(cors())
app.use(middleware.run)

app.get('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Hello');
});

app.listen(PORT, HOST, () => {
  console.log('Server up and running;');
});
