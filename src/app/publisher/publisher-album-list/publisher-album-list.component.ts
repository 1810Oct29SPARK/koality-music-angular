import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { Album } from '../../shared/models/album';

import { AlbumService } from '../../core/services/album.service';
import { ReviewService } from 'src/app/core/services/review.service';

@Component({
  selector: 'app-publisher-album-list',
  templateUrl: './publisher-album-list.component.html',
  styleUrls: ['./publisher-album-list.component.css']
})
export class PublisherAlbumListComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'genre',
    'price',
    'action'
  ];
  rawData: Album[];
  dataSource = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public albumService: AlbumService, public router: Router, public reviewService: ReviewService) { }

  ngOnInit() {
    this.albumService.getPublishedAlbums()
      .subscribe(response => {
        this.rawData = response;
        this.dataSource = new MatTableDataSource<Album>(this.rawData);
        this.dataSource.paginator = this.paginator;
      });
  }

  viewReview(album: Album) {
    this.reviewService.selectedAlbum = album;
    this.router.navigate(['/publisher/album-reviews']);
  }

}
