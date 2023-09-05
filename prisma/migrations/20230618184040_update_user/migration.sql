/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `identification` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "identification",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");
