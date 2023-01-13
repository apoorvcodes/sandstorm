export interface userInterface {
  id: string;
  createdAt: string;
  updatedAt: string;
  pubkey: string;
  name: string;
  email: string;
  avatarUrl: string;
  buidls?: buildInterface[];
}

export interface buildInterface {
  id: string;
  organisationId: string;
  joinedAt: string;
}
