import { ICreateHiredOutdoorDTO } from "../dtos/ICreateHiredOutdoorDTO";
import { HiredOutdoor } from "../infra/entities/HiredOutdoor";

interface IHiredOutdoorsRepository {
    create(data: ICreateHiredOutdoorDTO): Promise<void>;
    findByUserId(user_id: string): Promise<HiredOutdoor[]>;
    findById(id: string): Promise<HiredOutdoor>
}

export { IHiredOutdoorsRepository };