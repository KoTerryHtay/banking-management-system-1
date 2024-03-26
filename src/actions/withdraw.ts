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

export async function withdraw(
  accountId: number,
  formState: AmountFormState,
  formData: FormData
): Promise<AmountFormState> {
  const result = amountSchema.safeParse({
    amount: parseInt(formData.get("withdraw")?.toString()!),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const account = await db.account.findFirst({
    where: {
      AccountId: accountId,
    },
  });
  const remainAmount = account?.Balance! - 1000;
  // console.log("remainAmount >>>", remainAmount);

  if (remainAmount <= result.data.amount) {
    {
      return {
        errors: {
          amount: [
            `${
              remainAmount === result.data.amount
                ? "should remain 1000 kyats"
                : "not enough"
            }`,
          ],
        },
      };
    }
  }

  const updateAccount = await db.account.update({
    where: {
      AccountId: accountId,
    },
    data: {
      Balance: {
        decrement: result.data.amount,
      },
    },
  });
  const history = await db.history.create({
    data: {
      type: "WITHDRAW",
      withdrawAccountId: updateAccount.AccountId,
      amount: result.data.amount,
    },
  });

  revalidatePath("/account-lists");
  revalidatePath("/history");
  redirect(paths.withdrawHistoryPage(history.HistoryId));
}
