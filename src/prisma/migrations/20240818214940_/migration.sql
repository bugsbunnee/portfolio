/*
  Warnings:

  - The values [FRONTEND,MOBILE] on the enum `Project_stack` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `summary` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` MODIFY `stack` ENUM('FRONTEND_WEB', 'FRONTEND_MOBILE', 'BACKEND', 'FULLSTACK') NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `summary` VARCHAR(500) NOT NULL;
