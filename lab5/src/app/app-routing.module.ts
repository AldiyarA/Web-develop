import { NgModule } from '@angular/core';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {ProductListComponent} from './product-list/product-list.component';
import {Category} from './category/category';
import {ProductItemComponent} from './product-item/product-item.component';
import {Product} from './product-list/product';
const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'categories/:categoryId', component: ProductListComponent},
  {path: 'categories/:categoryId/products/:productId', component: ProductItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
function newRoutes(): void{
  console.log('checking for new items');
  for (const category of Category.categories){
    let b = false;
    for (const route of routes){
      if (route.path === `categories/${category.id}`) {b = true; }
    }
    if (b) { continue; }
    routes.push({path: `categories/${category.id}`, component: ProductListComponent});
    console.log(`categories/${category.id}`);
  }
  for (const product of Product.products){
    let b = false;
    console.log(product.category);
    const categories = Category.categories.filter(category => category.name === product.category);
    if (categories.length === 0) { continue; }
    const categoryId = categories[0].id;
    console.log(categoryId);
    for (const route of routes){
      if (route.path === `categories/${categoryId}/products/${product.id}`) {b = true; }
    }
    if (b) { continue; }
    routes.push({path: `categories/${categoryId}/products/${product.id}`, component: ProductListComponent});
    console.log(`new path --- categories/${categoryId}/products/${product.id}`);
  }
}

setInterval(newRoutes, 10000);

newRoutes();
