import { Schema } from 'mongoose';

export interface userInterface {
  createdAt: string;
  updatedAt: string;
  pubkey: string;
  address: string;
  name: string;
  email: string;
  avatarUrl: string;
  buidls?: buildInterface[];
  nfts?: nftInterface[];
}

export interface buildInterface {
  id: string;
  organisationId: Schema.Types.ObjectId;
  joinedAt: string;
}

export interface nftInterface {
  id: string;
  updatedAt: string;
  mintedAt: string;
  url: string;
  minthash: string;
  owner: string;
  buidlid: string;
}
