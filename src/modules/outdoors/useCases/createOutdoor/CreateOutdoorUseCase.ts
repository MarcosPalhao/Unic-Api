import { IAdressesRepository } from "@modules/adresses/repositories/IAdressesRepository";
import { ICreateOutdoorDTO } from "@modules/outdoors/dtos/ICreateOutdoorDTO";
import { IOutdoorsRepository } from "@modules/outdoors/repositories/IOutdoorsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

// interface IRequest {
//     address_id: string;
//     reference: string;
//     measure: string;
//     status: number;
//     cover?: string;
//     iframe_maps: string;
// }

@injectable()
class CreateOutdoorUseCase {
    constructor(
        @inject("OutdoorsRepository")
        private outdoorsRepository: IOutdoorsRepository,
        @inject("AdressesRepository")
        private adressesRepository: IAdressesRepository
    ) { }

    async execute({
        address_id,
        reference,
        measure,
        status,
        cover,
        iframe_maps
    }: ICreateOutdoorDTO): Promise<void> {
        const addressIsAvailable = await this.adressesRepository.findByAvailableAddress(address_id);

        if(!addressIsAvailable) {
            throw new AppError("Address is unavailable");
        }

        await this.outdoorsRepository.create({
            address_id,
            reference,
            measure,
            status,
            cover,
            iframe_maps
        });
    }
}

export { CreateOutdoorUseCase };