import {MigrationInterface, QueryRunner} from "typeorm";

export class database1648566710567 implements MigrationInterface {
    name = 'database1648566710567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inputvalue" ("ID" SERIAL NOT NULL, "inputValue" character varying NOT NULL, "token" integer NOT NULL, CONSTRAINT "PK_b2bb3de86c9ee5ff38b7bf5c192" PRIMARY KEY ("ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "inputvalue"`);
    }

}
