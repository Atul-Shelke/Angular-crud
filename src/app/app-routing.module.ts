import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:'auth',loadChildren :()=> import('./auth/auth/auth.module').then(m=>m.AuthModule)} ,//Auth component

  {path:'product',loadChildren :()=>import('./components/product/product.module').then(m=>m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
