import {MigrationInterface, QueryRunner} from "typeorm";

export class database1648566567870 implements MigrationInterface {
    name = 'database1648566567870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inputvalue" DROP COLUMN "token"`);
        await queryRunner.query(`ALTER TABLE "inputvalue" ADD "token" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inputvalue" DROP COLUMN "token"`);
        await queryRunner.query(`ALTER TABLE "inputvalue" ADD "token" character varying NOT NULL`);
    }

}
