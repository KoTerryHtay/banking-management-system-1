"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import type { Account } from "@prisma/client";
import AccountInfo from "./account-info";
import { paths } from "@/paths";
import Link from "next/link";

export default function AccountList({ account }: { account: Account }) {
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  return (
    <div>
      <div
        className="bg-[#D9D9D9] m-1 p-2 rounded text-[#0F4C75] font-semibold hover:cursor-pointer hover:text-white hover:bg-[#0F4C75]"
        onClick={onOpen}
      >
        Acc No. {account.AccountId} / Account Name. {account.CustomerName}
      </div>
      <Modal
        placement="center"
        size="md"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#0F4C75]"
      >
        <ModalContent>
          <ModalHeader className="text-white">Account Info</ModalHeader>
          <ModalBody>
            <AccountInfo account={account} />
          </ModalBody>
          <ModalFooter>
            <div className="flex gap-1">
              <Link
                className="bg-[#3282B8] text-white p-1 rounded"
                href={paths.deposit(account.AccountId.toString())}
              >
                Deposit
              </Link>
              <Link
                className="bg-[#3282B8] text-white p-1 rounded"
                href={paths.withdraw(account.AccountId.toString())}
              >
                Withdraw
              </Link>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
