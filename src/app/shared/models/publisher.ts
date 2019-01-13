import { PublisherCredentials } from './publisher-credentials';
import { PublisherDetail } from './publisher-detail';
import { Image } from './image';
import { Customer } from './customer';

export class Publisher {

  publisherId: number;
  publisherDetail: PublisherDetail;
  publisherCredentials: PublisherCredentials;
  image: Image;
  imageUrl: string;
  customerList: Customer[];

}
