import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { IOutdoorsInvoicesRepository } from "@modules/outdoors/repositories/IOutdoorsInvoicesRepository";
import { IOutdoorsRepository } from "@modules/outdoors/repositories/IOutdoorsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    customer_id: string;
    outdoor_id: string;
    value: number;
    due_at: Date;
    pay_date?: Date;
    status: number;
    description?: string;
}

@injectable()
class CreateOutdoorInvoiceUseCase {
    constructor(
        @inject("OutdoorsInvoicesRepository")
        private outdoorsInvoicesRepository: IOutdoorsInvoicesRepository,
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository,
        @inject("OutdoorsRepository")
        private outdoorsRepository: IOutdoorsRepository
    ) { }

    async execute({
        customer_id,
        outdoor_id,
        value,
        due_at,
        pay_date,
        status,
        description
    }: IRequest): Promise<void> {
        const customerExists = await this.customersRepository.findById(customer_id);

        if (!customerExists) {
            throw new AppError("customer not found for the given id");
        }

        const outdoorExists = await this.outdoorsRepository.findById(outdoor_id);

        if (!outdoorExists) {
            throw new AppError("outdoor not found for the given id");
        }

        await this.outdoorsInvoicesRepository.create({
            customer_id,
            outdoor_id,
            value,
            due_at,
            pay_date,
            status,
            description
        });
    }
}

export { CreateOutdoorInvoiceUseCase };