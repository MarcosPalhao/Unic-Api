interface ICreateCustomerDTO {
    name: string;
    email: string;
    document: number;
    phone: number;
    address_street: string;
    address_number: number;
    address_postal_code: number;
    address_city: string;
    address_state: string;
}

export { ICreateCustomerDTO };