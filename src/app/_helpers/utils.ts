export function generateUserId(): string {
    return 'user-' + Math.random().toString(16);
}

export function generateTransactionId(): string {
    return 'tr-' + Math.random().toString(16);
  }

export function generateAccountId(): string {
    return 'acc-' + Math.random().toString(16);
}
