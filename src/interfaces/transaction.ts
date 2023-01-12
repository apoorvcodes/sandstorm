export interface transactionInterface  {
    id: string 
    createdAt:string 
    amount: Number 
    tokenPubKey: string 
    reference: string 
    signature: string 
    customerPubKey: string 
    message: string
    status: string 
}