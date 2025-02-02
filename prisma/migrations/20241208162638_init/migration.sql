/*
  Warnings:

  - Added the required column `updatedAt` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pengajuanbaptis` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
