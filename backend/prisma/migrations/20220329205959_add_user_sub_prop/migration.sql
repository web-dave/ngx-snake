/*
  Warnings:

  - Added the required column `userSub` to the `ScoreEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ScoreEntry` ADD COLUMN `userSub` VARCHAR(191) NOT NULL;
