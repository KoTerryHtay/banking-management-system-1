import CreateHistory from "@/components/history/create-history";
import DepositHistory from "@/components/history/deposit-history";
import TransferHistory from "@/components/history/transfer-history";
import WithdrawHistory from "@/components/history/withdraw-history";
import { db } from "@/db";
import { paths } from "@/paths";
import type { History, Account } from "@prisma/client";
import Link from "next/link";

export default async function HistoryPage() {
  const history = await db.history.findMany({
    include: {
      userAccount: true,
      depositAccount: true,
      withdrawAccount: true,
      senderAccount: true,
      receiverAccount: true,
    },
  });

  // console.log(history);

  return (
    <div>
      <div className="text-white font-semibold">HistoryPage</div>
      <div className="flex flex-col gap-1">
        {history.map((history) => (
          <div key={history.HistoryId}>
            {history.type === "CREATE" ? (
              <Link href={paths.createHistoryPage(history.HistoryId)}>
                <CreateHistory
                  account={history.userAccount!}
                  time={history.createdAt}
                />
              </Link>
            ) : null}
            {history.type === "DEPOSIT" ? (
              <Link href={paths.depositHistoryPage(history.HistoryId)}>
                <DepositHistory
                  account={history.depositAccount!}
                  time={history.createdAt}
                  amount={history.amount!}
                />
              </Link>
            ) : null}
            {history.type === "WITHDRAW" ? (
              <Link href={paths.withdrawHistoryPage(history.HistoryId)}>
                <WithdrawHistory
                  account={history.withdrawAccount!}
                  time={history.createdAt}
                  amount={history.amount!}
                />
              </Link>
            ) : null}
            {history.type === "TRANSFER" ? (
              <Link href={paths.transferHistoryPage(history.HistoryId)}>
                <TransferHistory
                  senderAccount={history.senderAccount!}
                  receiverAccount={history.receiverAccount!}
                  time={history.createdAt}
                  amount={history.amount!}
                />
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
