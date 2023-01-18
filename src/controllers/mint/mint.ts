import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';
// import { User } from '../../schema/userSchema';
export async function mintNft(req: Request, res: Response) {
  const buidl = req.params.org;
  const user = req.params.user;
  const data = await Buidl.findOne({ id: buidl });
  if (!data) {
    res.status(400).json({ err: 'There is no buidl found with this id' });
    return;
  }

  res.json(user);
  console.log(data.members);
  console.log(
    data.members.find((e: any) => {
      return e.userID == user;
    }).name
  );
}
