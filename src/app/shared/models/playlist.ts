import { Customer } from './customer';
import { Track } from './track';

export class Playlist {

  playlistId: number;
  playlistName: string;
  customer: Customer;
  trackList: Track[];

}
