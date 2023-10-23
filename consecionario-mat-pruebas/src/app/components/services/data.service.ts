import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productsUser: Product[] = [];
  total = 0;
  constructor(){}

  addProduct(product: Product){
    this.productsUser.push(product)
  }

  getProductsUser(){
    return this.productsUser;
  }

  getTotal(){
    return this.total = this.productsUser.reduce((sum, item) => sum + item.price,0);
  }



}
