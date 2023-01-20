import { Request, Response } from 'express';
import { User } from '../../schema/userSchema';
import { userInterface } from 'src/interfaces/user';

export async function userCreate(req: Request, res: Response) {
  const data: userInterface = {
    address: req.body.address,
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    pubkey: req.body.pubkey,
    name: req.body.name,
    email: req.body.email,
    avatarUrl: req.body.avatarUrl,
    buidls: []
  };
  const isUser = await User.findOne({ address: data.address });
  if (isUser) {
    res.status(400).json({
      status: 400,
      err: 'User has already been registered and is duplicate',
      data: {
        id: isUser._id,
        createdAt: isUser.createdAt,
        updatedAt: isUser.updatedAt,
        pubkey: isUser.pubkey,
        address: isUser.address,
        name: isUser.name,
        email: isUser.email,
        avatarUrl: isUser.avatarUrl,
        buidls: isUser.buidls
      }
    });
    return;
  }

  const newUser = new User(data);
  newUser.save().then(() => console.log('user has been saved!'));
  res.status(200).json({
    status: 200,
    data: newUser
  });
  console.log(newUser.address);
}
