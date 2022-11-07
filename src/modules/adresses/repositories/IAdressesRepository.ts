import { ICreateAddressDTO } from "../dtos/ICreateAddressDTO";
import { Address } from "../infra/typeorm/entities/Address";

interface IAdressesRepository {
    create(data: ICreateAddressDTO): Promise<void>;
    findByName(name: string): Promise<Address>;
    findByAvailableAddress(id: string): Promise<Address[]>
}

export { IAdressesRepository };