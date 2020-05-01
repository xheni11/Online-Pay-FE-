import { Permission } from './permission.model';
// TODO: Get this information from a webservice

export interface Role {
id:number;
name:string;
permissions:Permission[];

}
