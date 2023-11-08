import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './controllers/product-list/product-list.component';
import { ProductDetailComponent } from './controllers/product-detail/product-detail.component';
import { SearchBarComponent } from './controllers/search-bar/search-bar.component';



const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "productDetail", component: ProductDetailComponent },
  { path: "productSearch", component: SearchBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
