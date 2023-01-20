import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';
import { buidlInterface } from 'src/interfaces/buidl';
import { User } from '../../schema/userSchema';

export async function buidlCreate(req: Request, res: Response) {
  const data: buidlInterface = {
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    address: req.body.address,
    website: req.body.webiste,
    twitter: req.body.twitter,
    linkdin: req.body.linkdin,
    github: req.body.github,
    email: req.body.email,
    avatarUrl: req.body.avatarurl,
    bannerUrl: req.body.bannerurl,
    goals: [],
    members: [
      {
        index: 1,
        userID: req.params.owner,
        joinedAt: Date.now().toString()
      }
    ],
    transactions: req.body.transactions || []
  };

  const isBuidl = await Buidl.findOne({ address: data.address });
  if (isBuidl) {
    res.status(400).json({
      status: 400,
      err: 'Buidl has already been registered and is duplicate',
      data: {
        createdAt: isBuidl.createdAt,
        updatedAt: isBuidl.updatedAt,
        address: isBuidl.address,
        website: isBuidl.webiste,
        twitter: isBuidl.twitter,
        linkdin: isBuidl.linkdin,
        github: isBuidl.github,
        email: isBuidl.email,
        avatarUrl: isBuidl.avatarurl,
        bannerUrl: isBuidl.bannerurl,
        goals: isBuidl.goals,
        members: isBuidl.members,
        transactions: isBuidl.transactions
      }
    });
    return;
  }

  const buidl = new Buidl(data);
  const user = await User.findOne({ id: req.params.owner });
  if (!user) {
    res
      .status(400)
      .json({ err: 'No specific user with ID found, buidl no created' });
    return;
  }

  if (!user.buidls) {
    user.buidls = [];
  }

  user.buidls.push({
    id: buidl._id,
    organisationId: buidl._id,
    joinedAt: Date.now().toString()
  });

  buidl.save().then(() => console.log('buidl has been saved!'));
  user.save().then(() => console.log('buidl saved to user cache'));

  res.status(200).json({
    status: 200,
    data: buidl
  });
}
