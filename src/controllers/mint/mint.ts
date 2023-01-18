import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';

import { User } from '../../schema/userSchema';
import { mintNftHelper } from '../../helpers/mint';
export async function mintNft(req: Request, res: Response) {
  const buidl = req.params.org;
  const user = req.params.user;
  const data = await Buidl.findOne({ id: buidl });
  if (!data) {
    res.status(400).json({ err: 'There is no buidl found with this id' });
    return;
  }

  console.log(data.members);

  if (
    !data.members.find((e: any) => {
      return e.userID == user;
    }).userID
  ) {
    console.log(
      data.members.find((e: any) => {
        return e.userID == user;
      })
    );
    res.status(400).json({ err: 'No user found in the buidl project' });
    return;
  }

  const userData = await User.findOne({ id: user });

  const respo = await mintNftHelper(4, userData.email);
  userData.nfts.push({
    id: respo.id,
    buidlid: data.id,
    mintedAt: Date.now().toString(),
    updatedAt: Date.now().toString()
  });

  userData.save().then(() => {
    res.status(200).json({
      msg: 'Mint was successful',
      data: respo
    });
  });
}
