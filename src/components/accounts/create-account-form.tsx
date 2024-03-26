"use client";

import * as actions from "@/actions";
import { Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "../buttons/form-button";

export default function CreateAccountForm({ townId }: { townId: string }) {
  const [formState, action] = useFormState(actions.CreateUser, {
    errors: {},
  });

  return (
    <form action={action} className="flex flex-col gap-3 items-center">
      <input hidden name={"townId"} defaultValue={townId} />
      <div className="flex items-center justify-center gap-3">
        <label className="text-white text-lg font-semibold" htmlFor="name">
          Customer Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Customer Name"
          className="w-auto"
          isInvalid={!!formState.errors.name}
          errorMessage={formState.errors.name?.join(", ")}
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <label className="text-white text-lg font-semibold" htmlFor="phone">
          Customer Phone
        </label>
        <Input
          id="phone"
          name="phone"
          placeholder="Customer Phone"
          className="w-auto"
          isInvalid={!!formState.errors.phone}
          errorMessage={formState.errors.phone?.join(", ")}
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <label className="text-white text-lg font-semibold" htmlFor="email">
          Customer Email
        </label>
        <Input
          id="email"
          name="email"
          placeholder="Customer Email"
          className="w-auto"
          isInvalid={!!formState.errors.email}
          errorMessage={formState.errors.email?.join(", ")}
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <label className="text-white text-lg font-semibold" htmlFor="deposit">
          Deposit Balance
        </label>
        <Input
          id="deposit"
          name="deposit"
          placeholder="Deposit Balance"
          className="w-auto"
          isInvalid={!!formState.errors.deposit}
          errorMessage={formState.errors.deposit?.join(", ")}
        />
      </div>
      <FormButton>Create Account</FormButton>
    </form>
  );
}
