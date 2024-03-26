"use client";

import AccountTransfer from "@/components/accounts/account-transfer";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { Input } from "@nextui-org/react";
import FormButton from "@/components/buttons/form-button";

export default function TransferPage() {
  const [senderFormState, senderAction] = useFormState(actions.getAccountById, {
    errors: {},
  });
  const [receiverFormState, receiverAction] = useFormState(
    actions.getAccountById,
    {
      errors: {},
    }
  );
  const senderAccount = senderFormState.data?.account;
  const receiverAccount = receiverFormState.data?.account;

  const [formState, action] = useFormState(actions.transfer, {
    errors: {},
  });

  const accounts = { senderAccount, receiverAccount };
  const accountInfo = JSON.stringify(accounts ?? {});

  return (
    <div className="flex flex-col gap-2">
      <div className="text-white text-xl font-bold py-2">Transfer Page</div>
      <AccountTransfer
        options="Sender"
        action={senderAction}
        formState={senderFormState}
      />

      <AccountTransfer
        options="Receiver"
        action={receiverAction}
        formState={receiverFormState}
      />

      {senderAccount && receiverAccount && (
        <form className="flex gap-2 w-fit" action={action}>
          <div className="font-semibold text-white">Transfer Money</div>
          <div className="flex flex-col gap-1">
            <Input
              name="amount"
              placeholder="Amount"
              isInvalid={!!formState.errors?.amount}
              errorMessage={formState.errors?.amount?.join(", ")}
            />
            <input name="accounts" defaultValue={accountInfo} hidden={true} />
            <FormButton>Transfer</FormButton>
          </div>
        </form>
      )}
    </div>
  );
}
