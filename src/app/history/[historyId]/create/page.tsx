import AccountInfo from "@/components/accounts/account-info";
import { db } from "@/db";
import { extractDate } from "@/utils";

interface ParamsProps {
  params: {
    historyId: string;
  };
}

export default async function CreateHistoryPage({ params }: ParamsProps) {
  const history = await db.history.findFirst({
    where: {
      HistoryId: parseInt(params.historyId),
    },
    include: {
      userAccount: true,
    },
  });
  const account = history?.userAccount;

  // console.log(history);

  return (
    <div className="text-white font-semibold">
      Create History
      <div className="py-2 px-5">
        <AccountInfo account={account!} />
        <div className="py-2">Opened at {extractDate(history?.createdAt!)}</div>
      </div>
    </div>
  );
}
