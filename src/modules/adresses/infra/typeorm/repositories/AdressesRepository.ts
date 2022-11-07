import { ICreateAddressDTO } from "@modules/adresses/dtos/ICreateAddressDTO";
import { IAdressesRepository } from "@modules/adresses/repositories/IAdressesRepository";
import { getRepository, Repository } from "typeorm";
import { Address } from "../entities/Address";

class AdressesRepository implements IAdressesRepository {
    private repository: Repository<Address>;

    constructor() {
        this.repository = getRepository(Address);
    }

    async findByAvailableAddress(id: string): Promise<Address[]> {
        const addressAvailable = await this.repository.find({
            where: {
                id: id,
                status: "1"
            }
        })

        return addressAvailable;
    }

    async create({ name, exp_day, status }: ICreateAddressDTO): Promise<void> {
        const address = this.repository.create({
            name,
            exp_day,
            status
        });

        await this.repository.save(address);
    }

    async findByName(name: string): Promise<Address> {
        const address = await this.repository.findOne({ name });
        return address;
    }

}

export { AdressesRepository };