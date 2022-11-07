import { ICreateOutdoorDTO } from "../dtos/ICreateOutdoorDTO";

interface IOutdoorsRepository {
    create(data: ICreateOutdoorDTO): Promise<void>;
}

export { IOutdoorsRepository };