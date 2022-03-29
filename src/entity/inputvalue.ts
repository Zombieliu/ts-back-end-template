import { Entity, PrimaryColumn, PrimaryGeneratedColumn,Column } from 'typeorm';

@Entity()
export class Inputvalue {

    @PrimaryGeneratedColumn()
    ID!: number;

    @Column()
    inputValue!: string;

    @Column()
    token!:number


}
