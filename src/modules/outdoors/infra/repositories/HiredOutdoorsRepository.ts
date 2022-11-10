import { ICreateHiredOutdoorDTO } from "@modules/outdoors/dtos/ICreateHiredOutdoorDTO";
import { IHiredOutdoorsRepository } from "@modules/outdoors/repositories/IHiredOutdoorsRepository";
import { getRepository, Repository } from "typeorm";
import { HiredOutdoor } from "../entities/HiredOutdoor";

class HiredOutdoorsRepository implements IHiredOutdoorsRepository {
    private repository: Repository<HiredOutdoor>;

    constructor() {
        this.repository = getRepository(HiredOutdoor);
    }

    async create({
        customer_id,
        outdoor_id,
        exp_date,
        active
    }: ICreateHiredOutdoorDTO): Promise<void> {
        const hiredOutdoor = this.repository.create({
            customer_id,
            outdoor_id,
            exp_date,
            active
        });

        await this.repository.save(hiredOutdoor);
    }

    async findByUserId(user_id: string): Promise<HiredOutdoor[]> {
        const hiredOutdoor = await this.repository.find({
            where: { user_id }
        });

        return hiredOutdoor;
    }

    async findById(id: string): Promise<HiredOutdoor> {
        const hiredOutdoor = await this.repository.findOne(id);

        return hiredOutdoor;
    }
}

export { HiredOutdoorsRepository };