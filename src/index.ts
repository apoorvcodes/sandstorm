import env from "dotenv"
env.config();
import express, { Express, Request, Response } from 'express';
import { HOST, PORT, MONGOPASS } from './constants';
import cors from "cors"
import { middleware } from './middlewares/logger';
import { mongoConnect } from './helpers/mongoConnect';

const app: Express = express();

app.use(cors())
app.use(middleware.run)
mongoConnect(MONGOPASS);
app.get('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Hello');
});

app.listen(PORT, HOST, () => {
  console.log('Server up and running;');
});
