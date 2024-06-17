import { Injectable } from '@angular/core';
import { Product } from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: "Astérix", price: 9.99, description: "Figurine d'Astérix d'une hauteur de 14 cm, réalisée en impression 3D de qualité et peinte à la main", src: "asterix.jpeg"},
    { id: 2, name: "Obélix", price: 9.99, description: "Figurine d'Obélix d'une hauteur de 19 cm, réalisée en impression 3D de qualité et peinte à la main", src: "obelix.jpg"},
    { id: 3, name: "Astérix et Obélix en légionnaire", price: 19.99, description: "Figurine d'Obélix d'une hauteur de 19 cm, réalisée en impression 3D de qualité et peinte à la main", src: "asterix-et-obelix-legionnaires.jpg"},
    { id: 4, name: "Idéfix", price: 6.99, description: "Figurine d'Idéfix d'une hauteur de 7cm, réalisée en impression 3D de qualité et peinte à la main", src: "idefix.jpg"},
    { id: 5, name: "Abraracourcix", price: 10.99, description: "Figurine d'Abraracourcix d'une hauteur de 19cm, réalisée en impression 3D de qualité et peinte à la main", src: "abraracourcix.jpg"},
    { id: 6, name: "Assurancetourix", price: 10.99, description: "Figurine d'Assurancetourix d'une hauteur de 19cm, réalisée en impression 3D de qualité et peinte à la main", src: "assurancetourix.jpg"},
    { id: 7, name: "César", price: 9.99, description: "Figurine de César d'une hauteur de 19cm, réalisée en impression 3D de qualité et peinte à la main", src: "cesar.jpg"},
    { id: 8, name: "Goudurix", price: 10.99, description: "Figurine de Goudurix d'une hauteur de 19cm, réalisée en impression 3D de qualité et peinte à la main", src: "goudurix.jpg"},
    { id: 9, name: "Cléopatre", price: 11.99, description: "Figurine de Cléopatre d'une hauteur de 19cm, réalisée en impression 3D de qualité et peinte à la main", src: "cleopatre.jpg"},
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products); 
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product)
  }
}
