import mongoose from 'mongoose';
import { buidlInterface } from 'src/interfaces/buidl';

export const buidlSchema = new mongoose.Schema({
  id: String,
  createdAt: String,
  updatedAt: String,
  fundsPubkey: String,
  website: String,
  twitter: String,
  linkdin: String,
  github: String,
  email: String,
  avatarUrl: String,
  bannerUrl: String,
  goals: [
    {
      id: String,
      title: String,
      status: Boolean,
      createdAt: String,
      completedAt: String,
      discription: String
    }
  ],
  members: [
    {
      id: String,
      userID: String,
      joinedAt: String
    }
  ],
  transactions: [
    {
      id: String,
      createdAt: String,
      amount: Number,
      tokenPubKey: String,
      reference: String,
      signature: String,
      customerPubKey: String,
      message: String,
      status: String
    }
  ]
});

export const User: any = mongoose.model<buidlInterface>('buidls', buidlSchema);