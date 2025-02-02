/*
  Warnings:

  - You are about to drop the column `userId` on the `pengajuanbaptis` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `pengajuanbaptis` DROP FOREIGN KEY `PengajuanBaptis_userId_fkey`;

-- DropIndex
DROP INDEX `PengajuanBaptis_userId_key` ON `pengajuanbaptis`;

-- AlterTable
ALTER TABLE `pengajuanbaptis` DROP COLUMN `userId`;
