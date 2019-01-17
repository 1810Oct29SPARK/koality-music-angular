import { Customer } from './customer';

export class CustomerCredentials {

  customerCredentialsId: number;
  username: string;
  hashSalt: string;
  passwordHash: string;
  customer: Customer;

}
