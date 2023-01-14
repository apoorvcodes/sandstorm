import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';
import { buidlInterface } from 'src/interfaces/buidl';

export async function buidlDelete(req: Request, res: Response) {
  const isBuidl = await Buidl.findOne({ id: req.params.id });
  if (!isBuidl) {
    res.status(400).json({
      status: 400,
      err: 'no Buidl with the specific id found in database'
    });
    return;
  }

  const ref = await Buidl.findOneAndDelete({ id: req.params.id });
  res.status(200).json({
    status: 200,
    message: `Buidl ${req.params.id} has been deleted from the database`,
    data: ref as buidlInterface
  });
  console.log(ref);
}
