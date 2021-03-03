import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {Category} from './category/category';
import {Product} from './product-list/product';

const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'category/:categoryId', component: ProductListComponent},
  {path: 'category/:categoryId/product/:productId', component: ProductItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

function newRoute(): void{
  for (const category of Category.categories){
    if (!category.hasRoutePath){
      routes.push({path: `category/:${category.id}`, component: ProductListComponent});
      category.hasRoutePath = true;
    }
  }
  for (const product of Product.products) {
    if (!product.hasRoutePath) {
      const categories = Category.categories.filter(c => c.name === product.category);
      if (categories.length === 0) { continue; }
      const category = categories[0];
      routes.push({path: `category/${category.id}/product/${product.id}`, component: ProductListComponent});
      console.log(`category/${category.id}/product/${product.id}`);
      product.hasRoutePath = true;
    }
  }
}

setInterval(newRoute, 5000);
newRoute();
