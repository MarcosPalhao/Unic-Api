import { IRentalsAdressesRepository } from "@modules/adresses/repositories/IRentalsAdressesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    address_id: string;
    value: number;
    due_at: Date;
    pay_date?: Date;
    status: number;
    description?: string;
}

@injectable()
class CreateRentalsAdressesInvoicesUseCase {
    constructor(
        @inject("RentalsAdressesRepository")
        private rentalsAdressesRepository: IRentalsAdressesRepository
    ) { }

    async execute({
        address_id,
        value,
        due_at,
        pay_date,
        status,
        description
    }: IRequest) {
        await this.rentalsAdressesRepository.create({
            address_id,
            value,
            due_at,
            pay_date,
            status,
            description
        });
    }
}

export { CreateRentalsAdressesInvoicesUseCase };