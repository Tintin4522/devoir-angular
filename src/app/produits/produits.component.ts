import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  searchText: string = '';
  currentSortOrder: string = 'asc';

  constructor(
    private productService: ProductsService, 
    private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  setSortOrder(order: string): void {
    this.currentSortOrder = order;
  }

  setSearchText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.searchText = inputElement.value;
    }
  }

  gotoProductDetail(id: number): void {
    this.router.navigate(['/produit', id]);
  }
}




