import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1654193936558 implements MigrationInterface {
    name = 'UserMigration1654193936558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

}
