import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("customers")
class Customer {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    document: number;

    @Column()
    phone: number;

    @Column()
    address_street: string;

    @Column()
    address_number: number;

    @Column()
    address_postal_code: number;

    @Column()
    address_city: string;

    @Column()
    address_state: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Customer };