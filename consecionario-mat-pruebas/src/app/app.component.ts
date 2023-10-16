import { Component } from '@angular/core';

import {Product} from './models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  imgParent='';

  onLoaded(img: string){
    console.log('log padre', img)

  }

  public getInfoMarca(marca: string = ""){

    const marca2 = this.products.filter( (productObject) => {
      return productObject.marca == marca

    })


    return marca2;
  }

  public getInfoPrecio(precio: number = 0){

    const precio2 = this.products.filter( (productObject) => {
      return productObject.price == precio

    })

    console.log(precio2);
    this.products = precio2;
  }

}

const prueba = new AppComponent();
//prueba.getInfoMarca("BMW");
prueba.getInfoPrecio(187900000);
console.log(prueba.products)


