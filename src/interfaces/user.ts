export interface userInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
  pubkey: string;
  name: string;
  email: string;
  avatarUrl: string;
  buidls?: buildInterface[];
  nfts?: nftInterface[];
}

export interface buildInterface {
  id: string;
  organisationId: string;
  joinedAt: string;
}


export interface nftInterface {
  id: string,
  createdAt: string;
  mintedAt: string,
  url: string

}