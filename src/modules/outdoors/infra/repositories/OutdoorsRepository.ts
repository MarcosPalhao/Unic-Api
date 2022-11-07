import { Address } from "@modules/adresses/infra/typeorm/entities/Address";
import { ICreateOutdoorDTO } from "@modules/outdoors/dtos/ICreateOutdoorDTO";
import { IOutdoorsRepository } from "@modules/outdoors/repositories/IOutdoorsRepository";
import { getRepository, Repository } from "typeorm";
import { Outdoor } from "../entities/Outdoor";


class OutdoorsRepository implements IOutdoorsRepository {
    private repository: Repository<Outdoor>;

    constructor() {
        this.repository = getRepository(Outdoor);
    }

    async create({
        address_id,
        reference,
        measure,
        status,
        cover,
        iframe_maps
    }: ICreateOutdoorDTO): Promise<void> {
        const outdoor = this.repository.create({
            address_id,
            status,
            cover,
            iframe_maps,
            measure,
            reference
        });

        await this.repository.save(outdoor);
    }
}

export { OutdoorsRepository };