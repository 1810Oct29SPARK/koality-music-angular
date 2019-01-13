import { Audio } from './audio';
import { Publisher } from './publisher';

export class Track {

  trackId: number;
  trackName: string;
  genre: string;
  composer: string;
  artist: string;
  trackLength: number;
  unitPrice: number;
  audio: Audio;
  audioUrl: string;
  publisher: Publisher;

}
