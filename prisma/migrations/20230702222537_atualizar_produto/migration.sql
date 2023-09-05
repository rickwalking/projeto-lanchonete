/*
  Warnings:

  - The `id_usuario` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "id_usuario",
ADD COLUMN     "id_usuario" INTEGER;
