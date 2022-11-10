import { ICreateOutdoorDTO } from "../dtos/ICreateOutdoorDTO";
import { Outdoor } from "../infra/entities/Outdoor";

interface IOutdoorsRepository {
    create(data: ICreateOutdoorDTO): Promise<void>;
    findAvailableOutdoor(id: string): Promise<Outdoor>;
    updateAvailable(id: string, status: 2): Promise<void>
}

export { IOutdoorsRepository };