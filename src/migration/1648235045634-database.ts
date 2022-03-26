import {MigrationInterface, QueryRunner} from "typeorm";

export class database1648235045634 implements MigrationInterface {
    name = 'database1648235045634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bounty" ("id" SERIAL NOT NULL, "github_user_name" character varying NOT NULL, "bounty_url" character varying NOT NULL, "bounty_state" character varying NOT NULL, "participants_number" integer NOT NULL, "submissions_number" integer NOT NULL, "insert_time" character varying NOT NULL, "update_time" character varying NOT NULL, "bounty_level" character varying NOT NULL, "bounty_name" character varying NOT NULL, "bounty_finish_nft_image" character varying NOT NULL, "bounty_content" character varying NOT NULL, CONSTRAINT "PK_afc9754b790b0effd1d59257f4d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bounty"`);
    }

}
