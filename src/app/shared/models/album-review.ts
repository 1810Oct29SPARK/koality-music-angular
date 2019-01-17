import { ReviewContent } from './review-content';
import { Customer } from './customer';
import { Album } from './album';

export class AlbumReview {

  albumReviewId: number;
  reviewContent: ReviewContent;
  customer: Customer;
  album: Album;

}
