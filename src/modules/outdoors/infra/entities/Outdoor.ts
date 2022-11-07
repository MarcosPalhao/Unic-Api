import { Address } from "@modules/adresses/infra/typeorm/entities/Address";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("outdoors")
class Outdoor {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Address)
    @JoinColumn({ name: "address_id" })
    address: Address;

    @Column()
    address_id: string;

    @Column()
    reference: string;

    @Column()
    measure: string;

    @Column()
    status: number;

    @Column()
    cover: string;

    @Column()
    iframe_maps: string;

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

export { Outdoor };