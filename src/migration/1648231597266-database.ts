import {MigrationInterface, QueryRunner} from "typeorm";

export class database1648231597266 implements MigrationInterface {
    name = 'database1648231597266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bounty_info" ("id" SERIAL NOT NULL, "bounty_url" character varying NOT NULL, "git_level" character varying NOT NULL, "token_name" character varying NOT NULL, "finish_nft_image" character varying NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_186191363d80774615620fe4854" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bounty_info"`);
    }

}
