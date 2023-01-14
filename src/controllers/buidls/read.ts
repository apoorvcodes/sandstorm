import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';
import { buildInterface } from 'src/interfaces/user';

export async function buidlRead(req: Request, res: Response) {
  const buidl = await Buidl.findOne({ id: req.params.id });
  if (!buidl) {
    res.status(400).json({
      status: 400,
      err: 'no buidl with the specific id found in database'
    });
    return;
  }

  res.status(200).json({
    status: 200,
    data: buidl as buildInterface,
  });
  console.log(buidl);
}
