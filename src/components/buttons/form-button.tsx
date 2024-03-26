"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function FormButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="bg-[#D9D9D9] font-bold text-[#0F4C75]"
      size="sm"
      isLoading={pending}
    >
      {children}
    </Button>
  );
}
