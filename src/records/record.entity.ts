import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['recorder'])
export class Recorder extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    carChassisNumber: number;

    @Column()
    created: string;

    @Column()
    color: string;

    @Column()
    chassisNumber: number;

}