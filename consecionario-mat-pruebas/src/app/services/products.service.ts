import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>('/api/cars')
  }

  getBrands(marcas: string[]){

    let url;

    if(marcas[0] == "Kia" || marcas[0] == "BMW" || marcas[0] == "Porche"){
      url = this.http.get<Product[]>('api/searchBrands?brands='+marcas[0]);
    }else if(marcas[0] == "Kia" && marcas[1] == "BMW" ||
            marcas[0] == "Kia" && marcas[1] == "Porche" ||
            marcas[0] == "BMW" && marcas[1] == "Porche"){
      url = this.http.get<Product[]>('api/searchBrands?brands='+marcas[0]+','+marcas[1]);
    }

    return url;
  }

  getFilterByPrice(minprince: number, maxprice:number){
    return this.http.get<Product[]>('/api/search?initialPrice='+minprince+'&finalPrice='+maxprice);
  }


}


