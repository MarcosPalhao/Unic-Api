import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Address";
import { v4 as uuidv4 } from "uuid";

@Entity("rents_invoices")
class RentalAddressInvoice {
    @PrimaryColumn()
    id: string;

    @OneToOne(() => Address)
    @JoinColumn({ name: "address_id" })
    address: Address;

    @Column()
    address_id: string;

    @Column()
    value: number;

    @Column()
    due_at: Date;

    @Column()
    pay_date: Date;

    @Column()
    status: number;

    @Column()
    description: string;

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

export { RentalAddressInvoice };