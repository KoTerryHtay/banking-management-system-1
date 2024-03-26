import AccountInfo from "@/components/accounts/account-info";
import DepositButton from "@/components/buttons/deposit-button";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface ParamsProps {
  params: {
    accountId: string;
  };
}

export default async function DepositPage({ params }: ParamsProps) {
  const account = await db.account.findFirst({
    where: {
      AccountId: parseInt(params.accountId),
    },
  });

  if (!account) notFound();

  return (
    <div className="flex flex-col gap-2">
      <div className="text-white font-bold text-xl">Deposit Page</div>
      <AccountInfo account={account} />
      <div className="flex gap-5 text-white text-xl font-semibold">
        <label>Deposit Amount</label>
        <DepositButton accountId={account.AccountId} />
      </div>
    </div>
  );
}
