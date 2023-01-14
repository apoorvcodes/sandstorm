import { transactionInterface } from './transaction';

export interface buidlInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
  fundsPubkey: string;
  website: string;
  twitter: string;
  linkdin: string;
  github: string;
  email: string;
  avatarUrl: string;
  bannerUrl: string;
  goals: goalInterface[];
  members: memberInterface[];
  transactions: transactionInterface[];
}

interface goalInterface {
  id: string;
  title: string;
  status: boolean;
  createdAt: string;
  completedAt: string;
  discription: string;
}

interface memberInterface {
  index: number;
  userID: string;
  joinedAt: string;
}
