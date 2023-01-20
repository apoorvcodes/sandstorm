import mongoose from 'mongoose';
import { userInterface } from '../interfaces/user';

export const userSchema = new mongoose.Schema({
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
  ],
  nfts: [
    {
      id: String,
      url: String,
      mintedAt: String,
      buidlid: String,
      updatedAt: String,
      minthash: String,
      owner: String
    }
  ]
});

export const User = mongoose.model<userInterface>('user', userSchema);
