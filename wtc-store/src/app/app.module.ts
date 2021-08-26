import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/home-page/navbar/navbar.component';
import { navbarOptionReducer } from './store/navbar-options/navbar-options.reducer';
import { CartComponent } from './components/home-page/navbar/cart/cart.component';
import { CarouselComponent } from './components/home-page/carousel/carousel.component';
import { InformationPaletteComponent } from './components/home-page/information-palette/information-palette.component';
import { LatestProductComponent } from './components/home-page/latest-product/latest-product.component';
import { NavigationBottomComponent } from './components/home-page/navigation-bottom/navigation-bottom.component';
import { FooterComponent } from './components/home-page/footer/footer.component';
import { ProductCardComponent } from './components/home-page/latest-product/product-card/product-card.component';
import { productsReducer } from './store/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { productListEffects } from './store/products/products.effects';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    CartComponent,
    CarouselComponent,
    InformationPaletteComponent,
    LatestProductComponent,
    NavigationBottomComponent,
    FooterComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({navbarOptions: navbarOptionReducer, products: productsReducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([productListEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
