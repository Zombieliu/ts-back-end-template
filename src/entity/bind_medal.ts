import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Bind_medal {

    @PrimaryColumn()
    github_user_name!: string;

    @Column()
    address!: string;

    @Column()
    medal_level!: string;

    @Column()
    current_experience!: string;
    

}
