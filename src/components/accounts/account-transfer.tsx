import { Chip, Input } from "@nextui-org/react";
import FormButton from "@/components/buttons/form-button";
import { getTownById } from "@/utils";
import { FormState } from "@/actions/getAccountById";

interface optionsInterface {
  action: (payload: FormData) => void;
  options: "Sender" | "Receiver";
  formState: FormState;
}

export default function AccountTransfer({
  formState,
  options,
  action,
}: optionsInterface) {
  const { town } = getTownById(formState.data?.account?.CustomerTownCode!);

  return (
    <div className="flex text-white font-semibold gap-2">
      <form action={action} className="flex flex-col gap-2 ">
        <div className="flex gap-1 items-center">
          <div>{options} Account Number</div>
          <Input
            name="accountId"
            placeholder={`${options} Account Number`}
            className="w-auto"
            size="sm"
            isInvalid={!!formState.errors?.AccountId}
            errorMessage={formState.errors?.AccountId?.join(", ")}
          />
          <FormButton>Check</FormButton>
        </div>

        {formState.data?.account && (
          <>
            <div className="flex gap-1 items-center">
              <div>{options} Account Name</div>
              <Chip className="px-10 py-2 bg-[#ededed] rounded">
                {formState.data?.account?.CustomerName}
              </Chip>
            </div>
            <div className="flex gap-1 items-center">
              <div>{options} Account Region</div>
              <Chip className="px-10 py-2 bg-[#ededed] rounded">
                {town?.Town_MMR_Name}
              </Chip>
            </div>
          </>
        )}
        {options === "Sender" && formState.data?.account && (
          <div className="flex gap-1 items-center">
            <div>{options} Account Balance</div>
            <Chip className="px-10 py-2 bg-[#ededed] rounded">
              {formState.data?.account?.Balance.toString()}
            </Chip>
          </div>
        )}
      </form>
    </div>
  );
}
