import { Button, Input } from "@nextui-org/react";

export default async function DepositPage() {
  return (
    <div>
      <div className="text-white text-xl font-bold">
        Deposit Page ((Sample Page))
      </div>
      <div className="flex flex-col items-center px-10 py-2 gap-1">
        <div className="flex gap-5 text-white text-xl font-semibold">
          <div>Customer Name</div>
          <div>User</div>
        </div>
        <div className="flex gap-5 text-white text-xl font-semibold">
          <div>Account Number</div>
          <div>000123</div>
        </div>
        <div className="flex gap-5 text-white text-xl font-semibold">
          <div>Account Region</div>
          <div>Kume</div>
        </div>
        <div className="flex gap-5 text-white text-xl font-semibold">
          <div>Account Remain</div>
          <div>1000 kyats</div>
        </div>
        <div className="flex gap-5 text-white text-xl font-semibold">
          <div>Account Status</div>
          <div>Fine</div>
        </div>
        <div className="flex gap-5 text-white text-xl font-semibold">
          <div>Deposit Amount</div>
          <div className="flex flex-col gap-2">
            <Input name="deposit" />
            <Button type="submit">Deposit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
