/*
  Warnings:

  - You are about to drop the column `categoria_id` on the `Categoria` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `produto_id` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `Usuario` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Categoria_categoria_id_key";

-- DropIndex
DROP INDEX "Produto_produto_id_key";

-- DropIndex
DROP INDEX "Usuario_usuario_id_key";

-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "categoria_id";

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "id_usuario",
ADD COLUMN     "usuario_id" INTEGER;

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "produto_id";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "usuario_id";
