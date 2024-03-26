import { Chip } from "@nextui-org/react";
import type { Account } from "@prisma/client";

export default function CreateHistory({
  account,
  time,
}: {
  account: Account;
  time: Date;
}) {
  return (
    <div className="bg-[#0F4C75] text-white rounded w-full px-4 py-2">
      <div className="flex gap-2 justify-between">
        <Chip color="primary" size="sm">
          Create Account
        </Chip>
      </div>
      <div className="flex gap-2 justify-between">
        <div>{account.CustomerName}</div>
        <div>{time.toISOString().split("T")[0]}</div>
      </div>
    </div>
  );
}
