import { getTownById } from "@/utils";
import type { Account } from "@prisma/client";

export default function AccountInfo({ account }: { account: Account }) {
  const { town } = getTownById(account.CustomerTownCode);

  return (
    <div className="flex flex-col gap-3 items-start text-white font-semibold">
      <div className="flex">
        <div>Customer Account Id - </div>
        <div> {account.AccountId}</div>
      </div>
      <div className="flex">
        <div>Customer Name - </div>
        <div>{account.CustomerName}</div>
      </div>
      <div className="flex">
        <div>Customer Phone - </div>
        <div>{account.CustomerPhone.toString()}</div>
      </div>
      <div className="flex">
        <div>Customer Email - </div>
        <div>{account.CustomerEmail}</div>
      </div>
      <div className="flex">
        <div>Account Region - </div>
        <div>{town?.Town_MMR_Name}</div>
      </div>
      <div className="flex">
        <div>Remain Balance - </div>
        <div>{account.Balance.toString()}</div>
      </div>
    </div>
  );
}
