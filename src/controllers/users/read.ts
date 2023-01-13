import { Request, Response } from 'express';
import { User } from '../../schema/userSchema';
import { userInterface } from 'src/interfaces/user';

export async function userRead(req: Request, res: Response) {
  const isUser = await User.findOne({ id: req.params.id });
  if (!isUser) {
    res.status(400).json({
      status: 400,
      err: 'no user with the specific id found in database',
    });
    return;
  }

  res.status(200).json(
    {
        status: 200,
        data: isUser as userInterface,
    }
  )
  console.log(isUser)
}
