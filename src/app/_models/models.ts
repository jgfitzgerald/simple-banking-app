export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    accounts: Account[];
    transactions: Transaction[];
}

export interface Account {
    id: string;
    name: string;
    balance: number;
    accountType: string;
}
  
  export interface Transaction {
    id: string;
    fromAccountId: string;
    toAccountId: string;
    amount: number;
  }
  