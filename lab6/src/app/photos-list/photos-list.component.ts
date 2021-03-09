import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Photo} from '../model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  @Input() photos: Photo[] = [];
  @Input() lastPage: number;
  @Input() page: number;
  @Output() toPage = new EventEmitter();
  @Output() link = new EventEmitter();
  pages = [5, 10, 20, 50, 100, 200];
  constructor() { }

  ngOnInit(): void {
  }
  goToPage(value: number): void{
    this.toPage.emit(value);
  }
  goToLink(value: number): void{
    this.link.emit(value);
  }
}
