/*
  Warnings:

  - Added the required column `image` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenisBaptis` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pengajuanbaptis` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `jenisBaptis` VARCHAR(191) NOT NULL;
