import { Role } from "./../../../auth/models/role.model";
export interface SignUpResponseModel {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  roles: Role[];
  username: string;
  valid: boolean;
}
