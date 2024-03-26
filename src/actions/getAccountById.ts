"use server";

import { db } from "@/db";
import { z } from "zod";
import type { Account } from "@prisma/client";

const accountIdSchema = z.object({
  AccountId: z.number(),
});

export interface FormState {
  data?: { account?: Account | null };
  errors?: { AccountId?: string[] };
}

export async function getAccountById(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const result = accountIdSchema.safeParse({
    AccountId: parseInt(formData.get("accountId")?.toString()!),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const account = await db.account.findFirst({
    where: {
      AccountId: result.data.AccountId,
    },
  });

  if (!account) {
    return {
      errors: {
        AccountId: ["not found"],
      },
    };
  }

  // console.log("id >>>", account?.AccountId);

  return {
    data: {
      account,
    },
  };
}
