import { Chip } from "@nextui-org/react";
import type { Account } from "@prisma/client";

export default function TransferHistory({
  senderAccount,
  receiverAccount,
  time,
  amount,
}: {
  senderAccount: Account;
  receiverAccount: Account;
  time: Date;
  amount: number;
}) {
  return (
    <div>
      <div className="bg-[#0F4C75] text-white rounded w-full px-4 py-2">
        <Chip color="success" size="sm">
          Transfer
        </Chip>
        <div className="flex gap-2 justify-between">
          <div>Transfer from {senderAccount.CustomerName}</div>
          <div>{amount} kyats</div>
        </div>
        <div className="flex gap-2 justify-between">
          <div>Transfer to {receiverAccount.CustomerName}</div>
          <div>{time.toISOString().split("T")[0]}</div>
        </div>
      </div>
    </div>
  );
}
