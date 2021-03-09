import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-such',
  templateUrl: './no-such.component.html',
  styleUrls: ['./no-such.component.css']
})
export class NoSuchComponent implements OnInit {
  homeBtn = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {this.homeBtn = true; }, 1500);
  }
}
