import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bounty {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    github_user_name!: string;

    @Column()
    bounty_url!: string;

    @Column()
    bounty_state!: string;

    @Column()
    participants_number!: number;

    @Column()
    submissions_number!: number;

    @Column()
    insert_time!: string;

    @Column()
    update_time!: string;

    @Column()
    bounty_level!: string;

    @Column()
    bounty_name!: string;

    @Column()
    bounty_finish_nft_image!: string;

    @Column()
    bounty_content!: string;
}

