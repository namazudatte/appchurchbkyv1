/*
  Warnings:

  - Added the required column `userId` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pengajuanbaptis` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `PengajuanBaptis` ADD CONSTRAINT `PengajuanBaptis_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
