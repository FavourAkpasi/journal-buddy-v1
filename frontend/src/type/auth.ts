
export type RegisterType = {
    name: string;
    email: string;
    password: string;
};

export type LoginType = {
    email: string;
    password: string;
};

export type UserType = {
    id: string;
    name: string;
    email: string;
    token: string;
};