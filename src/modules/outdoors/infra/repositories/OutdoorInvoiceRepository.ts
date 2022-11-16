import { ICreateOutdoorInvoiceDTO } from "@modules/outdoors/dtos/ICreateOutdoorInvoiceDTO";
import { IOutdoorsInvoicesRepository } from "@modules/outdoors/repositories/IOutdoorsInvoicesRepository";
import { getRepository, Repository } from "typeorm";
import { OutdoorInvoice } from "../entities/OutdoorInvoice";

class OutdoorInvoiceRepository implements IOutdoorsInvoicesRepository {
    private repository: Repository<OutdoorInvoice>;

    constructor() {
        this.repository = getRepository(OutdoorInvoice);
    }
    
    async create({
        customer_id,
        outdoor_id,
        value,
        due_at,
        pay_date,
        status,
        description
    }: ICreateOutdoorInvoiceDTO): Promise<void> {
        const outdoorInvoice = this.repository.create({
            customer_id,
            outdoor_id,
            value,
            due_at,
            pay_date,
            status,
            description,
        });

        await this.repository.save(outdoorInvoice);
    }

    
}

export { OutdoorInvoiceRepository };