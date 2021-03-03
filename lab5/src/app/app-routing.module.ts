import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./category/category.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

function addCategoryComponent(category: string) {
  routes.push({path: category, component: CategoryComponent})
}
