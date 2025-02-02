/*
  Warnings:

  - You are about to drop the column `tanggalBaptis` on the `pengajuanbaptis` table. All the data in the column will be lost.
  - Added the required column `alamat` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenisKelamin` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameAyah` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameIbu` to the `PengajuanBaptis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pengajuanbaptis` DROP COLUMN `tanggalBaptis`,
    ADD COLUMN `alamat` VARCHAR(191) NOT NULL,
    ADD COLUMN `jenisKelamin` VARCHAR(191) NOT NULL,
    ADD COLUMN `nameAyah` VARCHAR(191) NOT NULL,
    ADD COLUMN `nameIbu` VARCHAR(191) NOT NULL;
