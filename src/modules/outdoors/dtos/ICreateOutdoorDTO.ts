interface ICreateOutdoorDTO {
    address_id: string;
    reference: string;
    measure: string;
    status: number;
    cover?: string;
    iframe_maps: string;
}

export { ICreateOutdoorDTO };