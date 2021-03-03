import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../category/category';
import {switchMap} from 'rxjs/operators';
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
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // Find the product that correspond with the id provided in route.
    this.category = Category.categories.find(c => c.id === categoryIdFromRoute);
    if (this.category === undefined){
      return;
    }
    this.loadProductList();
  }
  loadProductList(): void{
    this.products = Product.products.filter(product => product.category === this.category.name);
  }

}
