import { ICreateRentalAddressInvoiceDTO } from "@modules/adresses/dtos/ICreateRentalAddressInvoiceDTO";
import { IRentalsAdressesRepository } from "@modules/adresses/repositories/IRentalsAdressesRepository";
import { getRepository, Repository } from "typeorm";
import { Address } from "../entities/Address";
import { RentalAddressInvoice } from "../entities/RentalAddressInvoice";

class RentalsAdressesRepository implements IRentalsAdressesRepository {
    private repository: Repository<RentalAddressInvoice>

    constructor() {
        this.repository = getRepository(RentalAddressInvoice);
    }

    async create({
        address_id,
        value,
        due_at,
        pay_date,
        status,
        description
    }: ICreateRentalAddressInvoiceDTO): Promise<void> {
        const rental = this.repository.create({
            address_id,
            value,
            due_at,
            pay_date,
            status,
            description
        });

        await this.repository.save(rental);
    }
}

export { RentalsAdressesRepository };