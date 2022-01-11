/*
  Warnings:

  - You are about to drop the column `user_id` on the `ScoreEntry` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `username` to the `ScoreEntry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ScoreEntry` DROP FOREIGN KEY `ScoreEntry_user_id_fkey`;

-- AlterTable
ALTER TABLE `ScoreEntry` DROP COLUMN `user_id`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `User`;
