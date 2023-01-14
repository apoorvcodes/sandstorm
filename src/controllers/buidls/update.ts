import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';
import { buidlInterface } from 'src/interfaces/buidl';

export async function buidlUpdate(req: Request, res: Response) {
  const data: buidlInterface = {
    id: req.params.id,
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    fundsPubkey: req.body.fundspubkey,
    website: req.body.website,
    twitter: req.body.twitter,
    linkdin: req.body.linkdin,
    github: req.body.github,
    email: req.body.email,
    avatarUrl: req.body.avatarurl,
    bannerUrl: req.body.bannerurl,
    goals: req.body.goals,
    members: req.body.members,
    transactions: []
  };

  const buidl = await Buidl.findOne({ id: data.id });
  if (!buidl) {
    res.status(400).json({
      status: 400,
      err: 'no buidl with the specific id found in database',
    });
    return;
  }

  buidl.updatedAt = Date.now().toString();
  buidl.fundsPubkey = data.fundsPubkey || buidl.fundsPubkey;
  buidl.website = data.website || buidl.webiste;
  buidl.twitter = data.twitter || buidl.twitter;
  buidl.linkdin = data.linkdin || buidl.linkdin;
  buidl.github = data.github || buidl.github;
  buidl.email = data.email || buidl.email;
  buidl.avatarUrl = data.avatarUrl || buidl.avatarUrl;
  buidl.bannerUrl = data.bannerUrl || buidl.bannerUrl;
  buidl.goals = data.goals || buidl.goals;
  buidl.members = data.members || buidl.members;

  buidl.save().then(() => console.log('buidl has been updated!'));

  res.status(200).json({
    status: 200,
    data: buidl
  });
  console.log(buidl);
}
