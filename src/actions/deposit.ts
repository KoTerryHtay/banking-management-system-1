"use server";

import { db } from "@/db";
import { paths } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const amountSchema = z.object({
  amount: z.number().gte(1000),
});

interface AmountFormState {
  errors: { amount?: string[] };
}

export async function deposit(
  accountId: number,
  formState: AmountFormState,
  formData: FormData
): Promise<AmountFormState> {
  const result = amountSchema.safeParse({
    amount: parseInt(formData.get("deposit")?.toString()!),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const account = await db.account.update({
    where: {
      AccountId: accountId,
    },
    data: {
      Balance: {
        increment: result.data.amount,
      },
    },
  });
  const history = await db.history.create({
    data: {
      type: "DEPOSIT",
      depositAccountId: account.AccountId,
      amount: result.data.amount,
    },
  });

  revalidatePath("/account-lists");
  revalidatePath("/history");
  redirect(paths.depositHistoryPage(history.HistoryId));
}
