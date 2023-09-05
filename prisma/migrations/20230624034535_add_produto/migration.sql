/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Usuario_nome_key";

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "produto_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_produto_id_key" ON "Produto"("produto_id");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_categoria_id_key" ON "Categoria"("categoria_id");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nome_key" ON "Categoria"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
