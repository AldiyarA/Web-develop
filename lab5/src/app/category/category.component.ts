import { Component, OnInit } from '@angular/core';
import {Category} from './category';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = Category.categories;
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

}
