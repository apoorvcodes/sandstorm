import mongoose, { Schema } from 'mongoose';
import { userInterface } from '../interfaces/user';

export const userSchema = new mongoose.Schema({
  createdAt: String,
  updatedAt: String,
  pubkey: String,
  address: String,
  name: String,
  email: String,
  avatarUrl: String,
  buidls: [
    {
      id: Schema.Types.ObjectId,
      organisationId: String,
      joinedAt: String
    }
  ],
  nfts: [
    {
      id: Schema.Types.ObjectId,
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
