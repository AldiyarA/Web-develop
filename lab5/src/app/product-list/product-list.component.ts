import { Component, OnInit } from '@angular/core';
import {Category} from '../category/category';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: Category | undefined;
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    console.log(categoryIdFromRoute);
    this.category = Category.categories.filter(category => category.id === categoryIdFromRoute)[0];
    if (this.category === undefined) { return; }
    this.loadProducts();
  }
  loadProducts(): void{
    this.products = Product.products.filter((product) => product.category.trim().toLowerCase() === this.category?.name.trim().toLowerCase());
  }
}
