import { Request, Response } from 'express';
import { Buidl } from '../../schema/buidlSchema';
import { buidlInterface } from 'src/interfaces/buidl';

export async function buidlUpdate(req: Request, res: Response) {
  const data: Partial<buidlInterface> = {
    updatedAt: Date.now().toString(),
    website: req.body.website,
    twitter: req.body.twitter,
    address: req.body.address,
    linkdin: req.body.linkdin,
    github: req.body.github,
    email: req.body.email,
    amountRequested: req.body.amountrequested,
    amountGranted: req.body.amountgranted,
    token: req.body.token,
    updatesCount: req.body.updatescount,
    avatarUrl: req.body.avatarurl,
    bannerUrl: req.body.bannerurl,
    goals: req.body.goals,
    members: req.body.members,
    transactions: req.body.transactions,
    proposals: req.body.proposals
  };

  const buidl = await Buidl.findOne({ address: data.address });
  if (!buidl) {
    res.status(400).json({
      status: 400,
      err: 'no buidl with the specific id found in database'
    });
    return;
  }

  buidl.updatedAt = Date.now().toString();
  buidl.transactions = data.transactions || buidl.transactions;
  buidl.website = data.website || buidl.website;
  buidl.address = data.address || buidl.address;
  buidl.twitter = data.twitter || buidl.twitter;
  buidl.linkdin = data.linkdin || buidl.linkdin;
  buidl.github = data.github || buidl.github;
  buidl.email = data.email || buidl.email;
  buidl.avatarUrl = data.avatarUrl || buidl.avatarUrl;
  buidl.bannerUrl = data.bannerUrl || buidl.bannerUrl;
  buidl.goals = data.goals || buidl.goals;
  buidl.members = data.members || buidl.members;
  buidl.proposals = data.proposals || buidl.proposals;
  buidl.amountRequested = data.amountRequested || buidl.amountRequested;
  buidl.amountGranted = data.amountGranted || buidl.amountGranted;
  buidl.token = data.token || buidl.token;
  (buidl.updatesCount = data.updatesCount || buidl.updatesCount),
    buidl.save().then(() => console.log('buidl has been updated!'));

  res.status(200).json({
    status: 200,
    data: buidl
  });
  console.log(buidl);
}
