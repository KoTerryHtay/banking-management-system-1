import { db } from "@/db";
import { extractDate } from "@/utils";

interface ParamsProps {
  params: {
    historyId: string;
  };
}

export default async function TransferHistoryPage({ params }: ParamsProps) {
  const history = await db.history.findFirst({
    where: {
      HistoryId: parseInt(params.historyId),
    },
    include: {
      senderAccount: true,
      receiverAccount: true,
    },
  });
  const senderAccount = history?.senderAccount;
  const receiverAccount = history?.receiverAccount;

  // console.log(history);

  return (
    <div className="text-white font-semibold">
      Transfer History
      <div className="py-2 px-5">
        <div>
          <div>Transaction number {history?.HistoryId}</div>
          <div>Transfer from {senderAccount?.CustomerName}</div>
          <div>Transfer to {receiverAccount?.CustomerName}</div>
          <div>Amount {history?.amount}</div>
          <div>Transaction time {extractDate(history?.createdAt!)}</div>
        </div>
      </div>
    </div>
  );
}
