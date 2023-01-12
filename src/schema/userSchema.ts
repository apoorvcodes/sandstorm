import mongoose from 'mongoose';
import { userInterface } from '../interfaces/user';

export const userSchema = new mongoose.Schema({
  id: String,
  createdAt: String,
  updatedAt: String,
  pubkey: String,
  name: String,
  email: String,
  avatarUrl: String,
  buidls: [
    {
      id: String,
      organisationId: String,
      joinedAt: String
    }
  ]
});

export const User: any = mongoose.model<userInterface>('user', userSchema);
