import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1655871593542 implements MigrationInterface {
    name = 'UserMigration1655871593542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("userId" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
