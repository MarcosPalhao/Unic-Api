import { Customer } from "@modules/customers/infra/typeorm/entities/Customer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Outdoor } from "./Outdoor";
import { v4 as uuidv4 } from "uuid";

@Entity("outdoors_invoices")
class OutdoorInvoice {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: "customer_id" })
    customer: Customer;

    @Column()
    customer_id: string;

    @OneToOne(() => Outdoor)
    @JoinColumn({ name: "outdoor_id" })
    outdoor: Outdoor;

    @Column()
    outdoor_id: string;

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

export { OutdoorInvoice };