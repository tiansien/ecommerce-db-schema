/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Account_user_name_key" ON "Account"("user_name");
