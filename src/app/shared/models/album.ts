import { Publisher } from './publisher';
import { Image } from './image';
import { Track } from './track';

export class Album {

  albumId: number;
  albumName: string;
  genre: string;
  unitPrice: number;
  image: Image;
  imageUrl: string;
  publisher: Publisher;
  trackList: Track[];

}
