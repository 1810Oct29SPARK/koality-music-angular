import { CustomerCredentials } from './customer-credentials';
import { CustomerDetail } from './customer-detail';
import { Image } from './image';
import { Publisher } from './publisher';
import { Track } from './track';
import { Album } from './album';

export class Customer {

  customerId: number;
  customerDetail: CustomerDetail;
  image: Image;
  imageUrl: string;
  customerCredentials: CustomerCredentials;
  publisherList: Publisher[];
  trackList: Track[];
  albumList: Album[];

}
