import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Product, MarcasSeleccionadas } from 'src/app/models/product.model';
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
  marcasSeleccionadas: MarcasSeleccionadas = {
    KIA: false,
    BMW: false,
    PORSCHE: false
  };
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
    this.products = data;
    console.log("Todos los productos desde el backend", data)

  });
}

public getInfoMarca(){
  if(this.marcasSeleccionadas.KIA === true
    && this.marcasSeleccionadas.BMW === true
    && this.marcasSeleccionadas.PORSCHE === true){
      this.limpiarFiltro();
    }else{
      this.productsService.getBrands(this.marcasSeleccionadas)?.subscribe(data => {
        this.FilterProducts = data;
        console.log("datos filtrados desde el backend por marca",data);
      });
      this.mostrarFiltro = false;
    }

}

public getInfoPrecio(minPrice: number, maxPrice: number){

  if(minPrice < 0 || maxPrice > 2000000000){
    this.limpiarFiltro();
    console.log("entre")
  }else{
    this.productsService.getFilterByPrice(minPrice, maxPrice).subscribe(data => {
      this.FilterProducts = data;
      console.log("datos filtrados desde el backend por precio",data);
    });
    //this.FilterProducts = this.products.filter(producto => producto.price >= minPrice && producto.price <= maxPrice);
    this.mostrarFiltro = false;
  }
}

public limpiarFiltro(){

    this.minPrice = 76290000;
    this.maxPrice = 770000000;
    this.FilterProducts = [];
    this.mostrarFiltro = true;

}

onAddToShoppingcart(product: Product){
  this.dataService.addProduct(product);
  this.total = this.dataService.getTotal();
}



}
