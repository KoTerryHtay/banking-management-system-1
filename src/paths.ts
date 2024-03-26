export const paths = {
  home() {
    return "/";
  },
  accountHistory(accountId: number) {
    return `/history/account/${accountId}`;
  },
  deposit(accountId: string) {
    return `/deposit/${accountId}`;
  },
  withdraw(accountId: string) {
    return `/withdraw/${accountId}`;
  },
  createHistoryPage(historyId: number) {
    return `/history/${historyId}/create`;
  },
  depositHistoryPage(historyId: number) {
    return `/history/${historyId}/deposit`;
  },
  withdrawHistoryPage(historyId: number) {
    return `/history/${historyId}/withdraw`;
  },
  transferHistoryPage(historyId: number) {
    return `/history/${historyId}/transfer`;
  },
};
