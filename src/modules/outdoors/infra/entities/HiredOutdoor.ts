import { Customer } from "@modules/customers/infra/typeorm/entities/Customer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Outdoor } from "./Outdoor";
import { v4 as uuidv4 } from "uuid";

@Entity("hired_outdoors")
class HiredOutdoor {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: "customer_id" })

    @Column()
    customer_id: string;

    @ManyToOne(() => Outdoor)
    @JoinColumn({ name: "outdoor_id" })

    @Column()
    outdoor_id: string;

    @Column()
    exp_date: Date;

    @Column()
    active: number;

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

export { HiredOutdoor };