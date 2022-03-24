import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Bind_github_user {

    @PrimaryColumn()
    evm_address!: string;

    @Column()
    github_user_name!: string;
}
