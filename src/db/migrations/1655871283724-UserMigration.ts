import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1655871283724 implements MigrationInterface {
    name = 'UserMigration1655871283724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_80b95948dfff0967ce1b3e3ae1b"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userID"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userId" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "firstName" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_8bf09ba754322ab9c22a215c919"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userID" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_80b95948dfff0967ce1b3e3ae1b" PRIMARY KEY ("userID")`);
    }

}
