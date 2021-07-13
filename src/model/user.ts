import {Status} from "./status";

export interface User {
    id: number,
    name: string;
    avatar_url: string;
    status: Status;
}

export interface CreateUser {
    name: string;
    avatar_url: string;
}