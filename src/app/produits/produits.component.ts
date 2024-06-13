import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  products = [
    { id: 1, name: "Astérix", price: 9.99, description: "Figurine d'Astérix d'une hauteur de 14 cm", src: "asterix.jpeg"},
    { id: 2, name: "Obélix", price: 9.99, description: "Figurine d'Obélix d'une hauteur de 19 cm", src: "obelix.jpg"},
    { id: 3, name: "Astérix et Obélix en légionnaire", price: 19.99, description: "Figurine d'Obélix d'une hauteur de 19 cm", src: "asterix-et-obelix-legionnaires.jpg"},
    { id: 4, name: "Idéfix", price: 6.99, description: "Figurine d'Idéfix' d'une hauteur de 7cm", src: "idefix.jpg"},
    { id: 5, name: "Abraracourcix", price: 10.99, description: "Figurine d'Abraracourcix d'une hauteur de 19cm", src: "abraracourcix.jpg"},
    { id: 6, name: "Assurancetourix", price: 10.99, description: "Figurine d'Assurancetourix d'une hauteur de 19cm", src: "assurancetourix.jpg"},
    { id: 7, name: "César", price: 9.99, description: "Figurine de César d'une hauteur de 19cm", src: "cesar.jpg"},
    { id: 8, name: "Goudurix", price: 10.99, description: "Figurine de Goudurix d'une hauteur de 19cm", src: "goudurix.jpg"},
    { id: 9, name: "Cléopatre", price: 11.99, description: "Figurine de Cléopatre d'une hauteur de 19cm", src: "cleopatre.jpg"},
  ];

  triCroissant(): void {
    this.products.sort((a, b) => a.price - b.price);
  }

  triDecroissant(): void {
    this.products.sort((a, b) => b.price - a.price)
  }

  recherche(text: any): void {
    let recherche = this.products.filter((product) => product.name.includes(text.value));
    console.log(recherche);
    this.products = recherche;
  }
}
