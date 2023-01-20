import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';

import { User } from '../../schema/userSchema';
import { checkStatus, mintNftHelper } from '../../helpers/mint';
export async function mintNft(req: Request, res: Response) {
  const buidl = req.params.org;
  const user = req.params.user;
  const stage = Number(req.params.stage);
  const data = await Buidl.findOne({ _id: buidl });
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

  const userData = await User.findOne({ _id: user });

  if (!userData) {
    res.status(400).json({ err: 'No user found with this id' });
    return;
  }

  const respo = await mintNftHelper(stage, userData.pubkey);
  await sleep(10000);
  const status = await checkStatus(respo.id);
  console.log(status);

  if (!userData.nfts) {
    userData.nfts = [];
  }

  userData.nfts.push({
    id: respo.id,
    buidlid: data.id,
    mintedAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    minthash: status.onChain.mintHash,
    owner: status.onChain.owner,
    url: status.metadata.image
  });

  userData.save().then(() => {
    res.status(200).json({
      msg: 'Mint was successful',
      data: status
    });
  });
}

function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
