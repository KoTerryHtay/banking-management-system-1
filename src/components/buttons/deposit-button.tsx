"use client";
import { Input } from "@nextui-org/react";
import FormButton from "./form-button";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function DepositButton({ accountId }: { accountId: number }) {
  const [formState, action] = useFormState(
    actions.deposit.bind(null, accountId),
    {
      errors: {},
    }
  );

  return (
    <form className="flex flex-col gap-2" action={action}>
      <Input
        name="deposit"
        placeholder="Deposit"
        isInvalid={!!formState.errors.amount}
        errorMessage={formState.errors.amount?.join(", ")}
      />
      <FormButton>Deposit</FormButton>
    </form>
  );
}