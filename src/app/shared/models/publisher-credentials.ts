import { Publisher } from './publisher';

export class PublisherCredentials {

  publisherCredentialsId: number;
  username: string;
  hashSalt: string;
  passwordHash: string;
  publisher: Publisher;

}
