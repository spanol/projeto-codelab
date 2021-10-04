/*
  Warnings:

  - You are about to drop the column `GameId` on the `game` table. All the data in the column will be lost.
  - You are about to drop the column `GenreId` on the `genre` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `game` DROP FOREIGN KEY `Game_GameId_fkey`;

-- DropForeignKey
ALTER TABLE `genre` DROP FOREIGN KEY `Genre_GenreId_fkey`;

-- AlterTable
ALTER TABLE `game` DROP COLUMN `GameId`;

-- AlterTable
ALTER TABLE `genre` DROP COLUMN `GenreId`;

-- CreateTable
CREATE TABLE `Game_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserId` INTEGER NOT NULL,
    `GameId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `GenreId` INTEGER NOT NULL,
    `GameId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Game_list` ADD CONSTRAINT `Game_list_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Game_list` ADD CONSTRAINT `Game_list_GameId_fkey` FOREIGN KEY (`GameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Genre_list` ADD CONSTRAINT `Genre_list_GenreId_fkey` FOREIGN KEY (`GenreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Genre_list` ADD CONSTRAINT `Genre_list_GameId_fkey` FOREIGN KEY (`GameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
