"use server";

import { db } from "@/db";
import { paths } from "@/paths";
import type { Account } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const transferSchema = z.object({
  amount: z.number().gte(1000),
  accounts: z.string(),
});

interface TransferFormState {
  errors?: { amount?: string[] };
}

export async function transfer(
  formState: TransferFormState,
  formData: FormData
): Promise<TransferFormState> {
  const result = transferSchema.safeParse({
    amount: parseInt(formData.get("amount")?.toString()!),
    accounts: formData.get("accounts")?.toString()!,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const accountsInfo = JSON.parse(result.data.accounts) as {
    senderAccount: Account;
    receiverAccount: Account;
  };

  const senderAmount = accountsInfo.senderAccount.Balance - 1000;
  const transferAmount = result.data.amount;
  if (senderAmount <= transferAmount) {
    // console.log("no enough");
    return {
      errors: {
        amount: ["not enough"],
      },
    };
  }

  const senderAccount = await db.account.update({
    where: {
      AccountId: accountsInfo.senderAccount.AccountId,
    },
    data: {
      Balance: {
        decrement: transferAmount,
      },
    },
  });

  const receiverAccount = await db.account.update({
    where: {
      AccountId: accountsInfo.receiverAccount.AccountId,
    },
    data: {
      Balance: {
        increment: transferAmount,
      },
    },
  });
  const history = await db.history.create({
    data: {
      type: "TRANSFER",
      amount: transferAmount,
      senderAccountId: senderAccount.AccountId,
      receiverAccountId: receiverAccount.AccountId,
    },
  });

  revalidatePath("/account-lists");
  revalidatePath("/history");
  redirect(paths.transferHistoryPage(history.HistoryId));
}
