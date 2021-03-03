import { Component, OnInit } from '@angular/core';
import {Product} from '../product-list/product';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../category/category';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: Product | undefined;
  category: Category | undefined;
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = Product.products.find(p => p.id === productIdFromRoute);
    if (this.product === undefined) {return; }
    this.category = Category.categories.find(c => c.name === this.product.category);
  }

}
