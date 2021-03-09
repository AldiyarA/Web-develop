import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AlbumsService} from '../services/albums.service';
import {Photo} from '../model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  page: number;
  lastIndex: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private client: HttpClient,
    private albumsService: AlbumsService
  ) { }
  photos: Photo[];
  loading = false;
  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(): void{
    this.loading = true;
    this.route.paramMap.subscribe((param) => {
      this.page = +param.get('pageNum');
    });
    this.albumsService.getPhotos().subscribe(photos => {
      this.loading = false;
      this.lastIndex = photos.length;
      this.photos = photos.slice((this.page - 1) * 18, Math.min(photos.length, (this.page) * 18));
    });
  }
  lastPage(): number{
    return Math.ceil(this.lastIndex / 18);
  }
}
