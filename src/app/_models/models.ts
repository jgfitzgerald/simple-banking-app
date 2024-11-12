export class User {
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    accounts?: Account[];
}

export class Account {
    id?: string;
    name?: string;
    balance?: number;
    accountType?: string;
    userId?: string;
}