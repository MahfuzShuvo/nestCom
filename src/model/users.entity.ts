import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(null)
    firstName: string;

    @Column(null)
    lastName: string;

    @Column(null)
    phone: string;

    @Column()
    email: string;

    @Column()
    password: string;
}