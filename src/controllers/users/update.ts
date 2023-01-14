import { Request, Response } from 'express';
import { User } from '../../schema/userSchema';
import { userInterface } from 'src/interfaces/user';

export async function userUpdate(req: Request, res: Response) {
  const data: userInterface = {
    id: req.params.id,
    createdAt: 'N0T_TO_BE_UPDATED',
    updatedAt: Date.now().toString(),
    pubkey: req.body.pubkey,
    name: req.body.name,
    email: req.body.email,
    avatarUrl: req.body.avatarUrl,
    buidls: req.body.buidls
  };
  const isUser = await User.findOne({ id: data.id });
  if (!isUser) {
    res.status(400).json({
      status: 400,
      err: 'no user with the specific id found in database'
    });
    return;
  }
  isUser.updatedAt = Date.now().toString();
  isUser.pubkey = data.pubkey || isUser.pubkey;
  isUser.name = data.name || isUser.name;
  isUser.email = data.email || isUser.email;
  isUser.avatarUrl = data.avatarUrl || isUser.avatarUrl;
  isUser.buidls = data.buidls || isUser.buidls;

  isUser.save().then(() => console.log('User has been updated'));

  res.status(200).json({
    status: 200,
    data: isUser as userInterface
  });
  console.log(isUser);
}
