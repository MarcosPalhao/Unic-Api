import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAdressesRepository } from "../../repositories/IAdressesRepository";

@injectable()
class CreateAddressUseCase {
    constructor(
        @inject("AdressesRepository")
        private adressesRepository: IAdressesRepository
    ) { }

    async execute({ name, exp_day, status }: ICreateAddressDTO): Promise<void> {
        const addressAlreadyExists = await this.adressesRepository.findByName(name);

        if (addressAlreadyExists) {
            throw new AppError("Address already exists");
        }

        console.log(name);

        await this.adressesRepository.create({
            name,
            exp_day,
            status
        });
    }
}

export { CreateAddressUseCase };