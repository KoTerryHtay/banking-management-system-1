import AccountInfo from "@/components/accounts/account-info";
import { db } from "@/db";
import { extractDate } from "@/utils";

interface ParamsProps {
  params: {
    historyId: string;
  };
}

export default async function WithdrawHistoryPage({ params }: ParamsProps) {
  const history = await db.history.findFirst({
    where: {
      HistoryId: parseInt(params.historyId),
    },
    include: {
      withdrawAccount: true,
    },
  });
  const account = history?.withdrawAccount;

  return (
    <div className="text-white font-semibold">
      Withdraw History
      <div className="py-2 px-5">
        <AccountInfo account={account!} />
        <div className="py-2">Withdraw Amount - {history?.amount}</div>
        <div>Time at {extractDate(history?.createdAt!)}</div>
      </div>
    </div>
  );
}
