import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateCustomerUseCase {
    constructor(
        @inject("CustomersRepository")
        private customersRepository: ICustomersRepository
    ) { }

    async execute({
        name,
        email,
        document,
        phone,
        address_street,
        address_number,
        address_postal_code,
        address_city,
        address_state
    }: ICreateCustomerDTO): Promise<void> {
        const customerAlreadyExists = await this.customersRepository.findByEmail(email);

        if (customerAlreadyExists) {
            throw new AppError("Customer already exists");
        }

        await this.customersRepository.create({
            name,
            email,
            document,
            phone,
            address_street,
            address_number,
            address_postal_code,
            address_city,
            address_state
        });
    }
}

export { CreateCustomerUseCase };