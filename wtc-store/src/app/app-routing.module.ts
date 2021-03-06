import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { OthersComponent } from './components/others/others.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { productList } from './services/productList.service';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartListComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'products/id/:id', component: ProductDisplayComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'others', component: OthersComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
