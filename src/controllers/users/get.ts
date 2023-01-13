import { Request, Response } from 'express';
import { User } from '../../schema/userSchema';
import { userInterface } from 'src/interfaces/user';

export async function userGet(req: Request, res: Response) {
  
  const isUser = await User.findOne({ id: req.params.id });
  if (!isUser) {
    res.status(400).json({
      status: 400,
      err: 'no user with the specific id found in database',
    });
    return;
  }

  const newUser = new User(data);
  newUser.save().then(() => console.log("user has been saved!"));
  res.status(200).json(
    {
        status: 200,
        data: newUser
    }
  )
  console.log(newUser)
}
