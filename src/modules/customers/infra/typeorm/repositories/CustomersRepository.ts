import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { getRepository, Repository } from "typeorm";
import { Customer } from "../entities/Customer";


class CustomersRepository implements ICustomersRepository {
    private repository: Repository<Customer>;

    constructor() {
        this.repository = getRepository(Customer);
    }

    async create({
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
        const customer = this.repository.create({
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

        await this.repository.save(customer);
    }

    async findByEmail(email: string): Promise<Customer> {
        const customer = await this.repository.findOne({ email });
        return customer;
    }

    async findById(id: string): Promise<Customer> {
        const customer = await this.repository.findOne(id);
        return customer;
    }

}

export { CustomersRepository };