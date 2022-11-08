import { container } from "tsyringe";
import "@shared/container/providers";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { CustomersRepository } from "@modules/customers/infra/typeorm/repositories/CustomersRepository";
import { IAdressesRepository } from "@modules/adresses/repositories/IAdressesRepository";
import { AdressesRepository } from "@modules/adresses/infra/typeorm/repositories/AdressesRepository";
import { IOutdoorsRepository } from "@modules/outdoors/repositories/IOutdoorsRepository";
import { OutdoorsRepository } from "@modules/outdoors/infra/repositories/OutdoorsRepository";
import { IRentalsAdressesRepository } from "@modules/adresses/repositories/IRentalsAdressesRepository";
import { RentalsAdressesRepository } from "@modules/adresses/infra/typeorm/repositories/RentalsAdressesRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ICustomersRepository>(
    "CustomersRepository",
    CustomersRepository
);

container.registerSingleton<IAdressesRepository>(
    "AdressesRepository",
    AdressesRepository
);

container.registerSingleton<IOutdoorsRepository>(
    "OutdoorsRepository",
    OutdoorsRepository
);

container.registerSingleton<IRentalsAdressesRepository>(
    "RentalsAdressesRepository",
    RentalsAdressesRepository
);