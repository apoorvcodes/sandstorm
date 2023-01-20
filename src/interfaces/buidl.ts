import { transactionInterface } from './transaction';
import { token } from 'src/enums/token';
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
  amountRequested: string,
  amountGranted: string,
  token: token,
  updatesCount: number,
  goals: goalInterface[];
  members: memberInterface[];
  transactions: transactionInterface[];
  proposals: proposalInterface[];
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

interface proposalInterface {
  name: string;
  purpose: string;
  address: string;
  amount: string;
  upvotes: number;
  downvotes: number;
  endedAt: string;
  buidlId: string;
}
