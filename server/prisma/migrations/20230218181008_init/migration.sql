-- CreateTable
CREATE TABLE `Cars` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `veiculo` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `vendido` BOOLEAN NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
