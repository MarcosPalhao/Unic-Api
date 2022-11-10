import { IHiredOutdoorsRepository } from "@modules/outdoors/repositories/IHiredOutdoorsRepository";
import { IOutdoorsRepository } from "@modules/outdoors/repositories/IOutdoorsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    customer_id: string;
    outdoor_id: string;
    exp_date: Date;
    active: number;
}

@injectable()
class CreateHiredOutdoorUseCase {
    constructor(
        @inject("HiredOutdoorsRepository")
        private hiredOutdoorRepository: IHiredOutdoorsRepository,
        @inject("OutdoorsRepository")
        private outdoorsRepository: IOutdoorsRepository
    ) { }

    async execute({
        customer_id,
        outdoor_id,
        exp_date,
        active
    }: IRequest): Promise<void> {
        const outdoorAvailable = await this.outdoorsRepository.findAvailableOutdoor(outdoor_id);

        if(!outdoorAvailable) {
            throw new AppError("Outdoor unavailable for rent");
        }

        await this.hiredOutdoorRepository.create({
            customer_id,
            outdoor_id,
            exp_date,
            active
        });

        await this.outdoorsRepository.updateAvailable(outdoor_id, 2);
    }
}

export { CreateHiredOutdoorUseCase };