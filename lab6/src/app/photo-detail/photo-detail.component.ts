import { Component, OnInit } from '@angular/core';
import {Photo} from '../model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumsService} from '../services/albums.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  photo: Photo;
  loading: boolean;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.getPhoto();
  }
  getPhoto(): void{
    this.route.paramMap.subscribe((param) => {
      const id = +param.get('photoId');
      this.loading = true;
      this.albumsService.getPhoto(id).subscribe((photo) => {
        this.photo = photo;
        this.loading = false;
      }, error => {
        window.alert('no such file');
        this.router.navigate(['**']);
      });
    });
  }
}
