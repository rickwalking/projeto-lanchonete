/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Usuario_id_cpf_key";

-- AlterTable
CREATE SEQUENCE usuario_id_seq;
ALTER TABLE "Usuario" ALTER COLUMN "id" SET DEFAULT nextval('usuario_id_seq');
ALTER SEQUENCE usuario_id_seq OWNED BY "Usuario"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");
