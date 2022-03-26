import {MigrationInterface, QueryRunner} from "typeorm";

export class database1648226333332 implements MigrationInterface {
    name = 'database1648226333332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bind_github_user" ("evm_address" character varying NOT NULL, "github_user_name" character varying NOT NULL, CONSTRAINT "PK_40a54bd8298855ac5a2d1cc8b33" PRIMARY KEY ("evm_address"))`);
        await queryRunner.query(`CREATE TABLE "bounty" ("id" SERIAL NOT NULL, "github_user_name" character varying NOT NULL, "bounty_url" character varying NOT NULL, "bounty_state" character varying NOT NULL, "participants_number" integer NOT NULL, "submissions_number" integer NOT NULL, "insert_time" character varying NOT NULL, "update_time" character varying NOT NULL, CONSTRAINT "PK_afc9754b790b0effd1d59257f4d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "bounty"`);
        await queryRunner.query(`DROP TABLE "bind_github_user"`);
    }

}
