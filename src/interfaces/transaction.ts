export interface transactionInterface {
  id: string;
  createdAt: string;
  amount: Number;
  tokenPubKey: string;
  reference: string;
  signature: string;
  message: string;
  status: string;
  buidlId: string;
}
