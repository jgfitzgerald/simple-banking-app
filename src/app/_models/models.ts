export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    accounts: Account[];
}

export interface Account {
    id: string;
    name: string;
    balance: number;
    accountType: string;
    userId: string;
    transfers: Transaction[];
}
  
  export interface Transaction {
    fromAccountId: string;
    toAccountId: string;
    amount: number;
  }
  