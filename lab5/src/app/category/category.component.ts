import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Category} from "../product-list/product";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categories: Category[] = [];
  constructor() {}
  ngOnInit(): void {
  }
  @Output() category = new EventEmitter<Category>();

  setCategory(category: Category){
    this.category.emit(category);
  }
}
