import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlbumsService} from '../services/albums.service';
import {Album} from '../model';
// import {Album} from '../albums/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  loading: boolean;
  managing = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(): void{
    this.route.paramMap.subscribe((param) => {
      const id = +param.get('albumId');
      this.loading = true;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loading = false;
      }, () => {
        console.log('No such item');
        this.router.navigate(['**']);
      });
    });
  }
  updateAlbum(managedAlbum: Album): void{
    this.loading = true;
    this.stopManaging();
    this.albumsService.updateAlbum(managedAlbum).subscribe((album) => {
      console.log(album);
      this.album = album;
      this.loading = false;
    });
  }
  stopManaging(): void{
    this.managing = false;
  }
}
