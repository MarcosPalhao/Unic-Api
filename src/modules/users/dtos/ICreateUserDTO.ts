interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    id?: string;
    photo?: string;
}

export { ICreateUserDTO };