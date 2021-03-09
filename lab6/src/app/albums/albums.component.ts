import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AlbumsService} from '../services/albums.service';
import {Album} from '../model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private client: HttpClient,
    private albumsService: AlbumsService
  ) { }
  albums: Album[] = [];
  loading = false;
  creating = false;
  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(): void{
    this.loading = true;
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.loading = false;
    });
  }
  change(): void {
    const btn = document.getElementById('change-submit-button');
    if (btn.innerText.trim() === 'Change'){
      document.getElementById('title-text').removeAttribute('readonly');
      btn.innerText = 'Submit';
    }else{
      btn.innerText = 'Change';
      document.getElementById('title-text').setAttribute('readonly', '1');
    }
  }

  newAlbum(newAlbum: Album): void{
    this.stopCreating();
    this.albumsService.addAlbum(newAlbum).subscribe((album) => {
      console.log(album);
      this.albums.push(album);
    });
  }
  stopCreating(): void{
    this.creating = false;
  }
  deleteAlbum(album: Album): void{
    this.albums = this.albums.filter(a => a.id !== album.id);
    this.albumsService.deleteAlbum(album.id).subscribe((x) => {
      console.log(x);
    });
  }
}
