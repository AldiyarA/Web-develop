import { Component, OnInit } from '@angular/core';
import {Product} from '../product-list/product';
import {Category} from '../category/category';
import {ActivatedRoute} from '@angular/router';

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
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log(productIdFromRoute);
    this.product = Product.products.filter(product => product.id === productIdFromRoute)[0];
    this.category = Category.categories.filter(category => category.name === this.product?.category)[0];
  }
}
