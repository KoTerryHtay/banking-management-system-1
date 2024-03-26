"use server";

import { db } from "@/db";
import { paths } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createAccountSchema = z.object({
  name: z.string().min(5),
  phone: z.number().int(),
  email: z.string().email(),
  deposit: z.number().gte(1000),
  townId: z.string(),
});

interface createAccountFormState {
  errors: {
    name?: string[];
    phone?: string[];
    email?: string[];
    deposit?: string[];
  };
}

// townId=MMR010015702&name=&phone=&email=&deposit=
export async function CreateUser(
  formState: createAccountFormState,
  formData: FormData
): Promise<createAccountFormState> {
  const result = createAccountSchema.safeParse({
    townId: formData.get("townId"),
    name: formData.get("name"),
    phone: parseInt(formData.get("phone")?.toString()!),
    email: formData.get("email"),
    deposit: parseInt(formData.get("deposit")?.toString()!),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const account = await db.account.create({
    data: {
      CustomerName: result.data.name,
      CustomerPhone: result.data.phone,
      CustomerEmail: result.data.email,
      CustomerTownCode: result.data.townId,
      Balance: result.data.deposit,
    },
  });
  const history = await db.history.create({
    data: {
      type: "CREATE",
      userAccountId: account.AccountId,
    },
  });

  revalidatePath("/account-lists");
  revalidatePath("/history");
  redirect(paths.createHistoryPage(history.HistoryId));
}
