import { ICreateRentalAddressInvoiceDTO } from "../dtos/ICreateRentalAddressInvoiceDTO";

interface IRentalsAdressesRepository {
    create(data: ICreateRentalAddressInvoiceDTO): Promise<void>;
}

export { IRentalsAdressesRepository };