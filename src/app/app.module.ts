import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProduitsComponent,
    SortPipe,
    FilterPipe,
    ProduitDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
