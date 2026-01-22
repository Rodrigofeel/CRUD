/*
  Warnings:

  - The primary key for the `Livro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `Livro` table. All the data in the column will be lost.
  - The `id` column on the `Livro` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Livro" DROP CONSTRAINT "Livro_categoryId_fkey";

-- AlterTable
ALTER TABLE "Livro" DROP CONSTRAINT "Livro_pkey",
DROP COLUMN "categoryId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Livro_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "categorias";
