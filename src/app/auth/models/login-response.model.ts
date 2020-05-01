import { Role } from './role.model';
export interface LoginResponse{
    name:string;
    roles:Role[];
    token:string;
}