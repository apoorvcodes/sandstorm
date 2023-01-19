import { transactionInterface } from './transaction';

export interface buidlInterface {
  createdAt: string;
  updatedAt: string;
  address: string;
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
