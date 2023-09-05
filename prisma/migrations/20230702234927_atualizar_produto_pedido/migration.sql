/*
  Warnings:

  - You are about to drop the `PedidoProduto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PedidoProduto" DROP CONSTRAINT "PedidoProduto_pedido_id_fkey";

-- DropForeignKey
ALTER TABLE "PedidoProduto" DROP CONSTRAINT "PedidoProduto_produto_id_fkey";

-- DropTable
DROP TABLE "PedidoProduto";

-- CreateTable
CREATE TABLE "_PedidoToProduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PedidoToProduto_AB_unique" ON "_PedidoToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_PedidoToProduto_B_index" ON "_PedidoToProduto"("B");

-- AddForeignKey
ALTER TABLE "_PedidoToProduto" ADD CONSTRAINT "_PedidoToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoToProduto" ADD CONSTRAINT "_PedidoToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
