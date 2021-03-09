import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Photo} from '../model';
import {AlbumsService} from '../services/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];
  loading = false;
  page: number;
  lastIndex: number;
  albumId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService,
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(): void{
    this.route.paramMap.subscribe((param) => {
      this.albumId = +param.get('albumId');
      this.page = +param.get('pageNum');
      this.loading = true;
      this.albumsService.getAlbumPhotos(this.albumId).subscribe((photos) => {
        this.loading = false;
        this.lastIndex = photos.length;
        this.photos = photos.slice((this.page - 1) * 18, Math.min(photos.length, (this.page) * 18));
      });
    });
  }
  lastPage(): number{
    return Math.ceil(this.lastIndex / 18);
  }
}
