import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Product } from 'src/app/models/product.model';
import { DataService } from '../services/data.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public FilterProducts: Product[] = []
  public FilterProductsMarca: Product[] = []
  public productsUser: Product[] = [];
  public products: Product[] = [];
total = 0;

minPrice: number = 76290000;
maxPrice: number = 770000000;
mostrarFiltro = true;

constructor(
  private  dataService: DataService,
  private productsService: ProductsService
){

}

ngOnInit(): void {
  this.productsUser = this.dataService.getProductsUser();
  this.productsService.getAllProducts().subscribe(data => {
    console.log();
  });
}

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
  this.dataService.addProduct(product);
  this.total = this.dataService.getTotal();
}



}
