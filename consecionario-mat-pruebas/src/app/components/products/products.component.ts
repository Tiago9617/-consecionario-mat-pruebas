import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public productsUser: Product[] = [];
  public products: Product[] = [

    {
    image:'./assets/Images//BMW/cosySec(2).jpg',
    name: 'BMW i3s Atelier',
    price: 187900000,
    describe: 'Motor electrico',
    marca: "BMW"


  },

  {
    image: './assets/Images/BMW/cosySec(1).jpg',
    name: ' BMW 330e iPerformance',
    price: 184900000,
    describe: 'Hibrido',
    marca: "BMW"

  },

  {
    image: './assets/Images/BMW/cosySec.jpg',
    name: 'BMW M240i Cabrio',
    price: 179900000,
    describe: 'Motor a combustion',
    marca: "BMW"

  },

  {
    image: './assets/Images/KIA/kiacerato.jpg',
    name: 'Kia cerato',
    price: 97490000,
    describe: 'Motor a combustion',
    marca: "Kia"

  },

  {
    image: './assets/Images/KIA/KIAStonic.jpg',
    name: 'Kia Stonic',
    price: 76290000,
    describe: 'Hibrido',
    marca: "Kia"

  },

  {
    image:'./assets/Images/KIA/KiaSportage.jpg',
    name: 'Kia KiaSportage',
    price: 97490000,
    describe: 'Motor a combustion',
    marca: "Kia"

  },

  {
    image:'./assets/Images/PORCHE/Taycan.jpeg',
    name: 'Porche Taycan',
    price: 770000000,
    describe: 'Motor Electrico',
    marca: "Porche"
  },

  {
    image:'./assets/Images/PORCHE/Macan.jpeg',
    name: 'PORCHE MACAN',
    price: 549900000,
    describe: 'Motor a combustion',
    marca: "Porche"
  },

  {
    image:'./assets/Images/PORCHE/Cayenne.jpeg',
    name: 'PORCHE CAYENNE',
    price: 218780000,
    describe: 'Motor a combustion',
    marca: "Porche"
  },
];
total = 0;
public FilterProducts: Product[] = []
public FilterProductsMarca: Product[] = []
minPrice: number = 76290000;
maxPrice: number = 770000000;
mostrarFiltro = true;

public getInfoMarca(marca: string = ""){

  this.FilterProductsMarca = this.products.filter( (productObject) => {
    return productObject.marca == marca

  })



}

public getInfoPrecio(minPrice: number, maxPrice: number){

  if(minPrice < 76290000 || maxPrice > 770000000){
    this.LimpiarFiltro();

  }else{
    this.FilterProducts = this.products.filter(producto => producto.price >= minPrice && producto.price <= maxPrice);
    this.mostrarFiltro = false;
  }


}

public LimpiarFiltro(){
    this.minPrice = 0;
    this.maxPrice = 0;
    this.FilterProducts = [];
    this.mostrarFiltro = true;

}

onAddToShoppingcart(product: Product){
  console.log(product)
  this.productsUser.push(product)
  this.total = this.productsUser.reduce((sum, item) => sum + item.price,0);
}

}
