import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from '../model';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
  @Output() newAlbum = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() album: Album = {id: 0, userId: 0, title: ''};
  oldTitle: string;
  oldUserId: number;
  constructor() {
  }

  ngOnInit(): void {
    this.oldTitle = this.album.title;
    this.oldUserId = this.album.userId;
  }
  submitAlbum(): void{
    this.newAlbum.emit(this.album);
    this.album = {id: 0, userId: 0, title: ''};
  }
  cancelAction(): void{
    this.cancel.emit();
    this.album.title = this.oldTitle;
    this.album.userId = this.oldUserId;
    this.album = {id: 0, userId: 0, title: ''};
  }
}
