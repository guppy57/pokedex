/*
  Warnings:

  - You are about to drop the column `image` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `artwork` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defense` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speciesName` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "image",
ADD COLUMN     "artwork" TEXT NOT NULL,
ADD COLUMN     "attack" INTEGER NOT NULL,
ADD COLUMN     "defense" INTEGER NOT NULL,
ADD COLUMN     "hp" INTEGER NOT NULL,
ADD COLUMN     "speciesName" TEXT NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL;
