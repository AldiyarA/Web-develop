import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {AlbumsService} from '../services/albums.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  albumId = '';
  photoId = '';
  albumSearching = false;
  photoSearching = false;
  constructor(private location: Location, private albumService: AlbumsService, private router: Router) { }

  ngOnInit(): void{}
  goBack(): void{
    this.location.back();
  }
  goForward(): void{
    this.location.forward();
  }
  searchAlbum(): void{
    if (isNaN(Number(this.albumId))){
      window.alert('Wrong input');
      this.albumId = '';
      return;
    }
    this.albumSearching = true;
    this.albumService.getAlbum(Number(this.albumId)).subscribe(a => {
      this.router.navigate(['/albums', this.albumId]);
    }, () => {
      window.alert('No such album');
      this.albumSearching = false;
      this.albumId = '';
    }, () => {
      this.albumSearching = false;
      this.albumId = '';
    });
  }
  searchPhoto(): void{
    if (isNaN(Number(this.photoId))){
      window.alert('Wrong input');
      this.photoId = '';
      return;
    }
    this.photoSearching = true;
    this.albumService.getPhoto(Number(this.photoId)).subscribe(p => {
      this.router.navigate(['/photos', this.photoId]);
    }, () => {
      window.alert('No such photo');
      this.photoSearching = false;
      this.photoId = '';
    }, () => {
      this.photoSearching = false;
      this.photoId = '';
    });
  }
}
