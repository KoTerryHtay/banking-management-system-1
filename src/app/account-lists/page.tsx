import AccountList from "@/components/accounts/account-list";
import { db } from "@/db";

export default async function AccountListsPage() {
  const accounts = await db.account.findMany();

  return (
    <div className="flex flex-col gap-1 items-center overflow-auto">
      {accounts.map((account) => (
        <AccountList
          key={account.AccountId + crypto.randomUUID()}
          account={account}
        />
      ))}
    </div>
  );
}
