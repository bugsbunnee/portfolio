-- CreateTable
CREATE TABLE `Certification` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Certification` ADD CONSTRAINT `Certification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
