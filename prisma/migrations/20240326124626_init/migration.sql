-- CreateEnum
CREATE TYPE "Type" AS ENUM ('CREATE', 'DEPOSIT', 'WITHDRAW', 'TRANSFER');

-- CreateTable
CREATE TABLE "Account" (
    "AccountId" SERIAL NOT NULL,
    "CustomerName" TEXT NOT NULL,
    "CustomerPhone" INTEGER NOT NULL,
    "CustomerEmail" TEXT NOT NULL,
    "CustomerTownCode" TEXT NOT NULL,
    "Balance" INTEGER NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("AccountId")
);

-- CreateTable
CREATE TABLE "History" (
    "HistoryId" SERIAL NOT NULL,
    "amount" INTEGER,
    "Remark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "Type" NOT NULL,
    "userAccountId" INTEGER,
    "senderAccountId" INTEGER,
    "receiverAccountId" INTEGER,
    "depositAccountId" INTEGER,
    "withdrawAccountId" INTEGER,

    CONSTRAINT "History_pkey" PRIMARY KEY ("HistoryId")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userAccountId_fkey" FOREIGN KEY ("userAccountId") REFERENCES "Account"("AccountId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_senderAccountId_fkey" FOREIGN KEY ("senderAccountId") REFERENCES "Account"("AccountId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_receiverAccountId_fkey" FOREIGN KEY ("receiverAccountId") REFERENCES "Account"("AccountId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_depositAccountId_fkey" FOREIGN KEY ("depositAccountId") REFERENCES "Account"("AccountId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_withdrawAccountId_fkey" FOREIGN KEY ("withdrawAccountId") REFERENCES "Account"("AccountId") ON DELETE SET NULL ON UPDATE CASCADE;
