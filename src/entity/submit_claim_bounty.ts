import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Submit_claim_bounty {

    @PrimaryColumn()
    bounty_url!: string;

    @Column()
    submit_bounty_url!: string;

    @Column()
    claim_github_user_name!: string;

    @Column()
    github_user_name!: string;



}
