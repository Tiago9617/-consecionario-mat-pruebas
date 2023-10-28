import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, MarcasSeleccionadas } from '../models/product.model';

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

  getBrands(marcas:MarcasSeleccionadas){

    let url;
    let marca:string = '';
    marcas.KIA
    marcas.BMW
    marcas.PORSCHE
    //KIA, BMW, Porche
    if(marcas.KIA === true){
        marca = "Kia"
        if(marcas.BMW === true){
          marca = marca + ",BMW";
        }

        if (marcas.PORSCHE === true){
          marca = marca + ",Porche"
        }

    }else if (marcas.BMW === true){
      marca = "BMW";
      if(marcas.PORSCHE === true){
        marca = marca + ",Porche"
      }
    }else if(marcas.PORSCHE === true){
      marca = "Porche"
    }

   /* if(marcas.PORSCHE === true){
      marca = "Porche"
      if(marcas.KIA == true){
        marca = marca + ",Kia"
      }

      if(marcas.BMW ===  true){
        marca = marca + ",BMW";
      }
    }*/
    if(marca === "Kia" || marca === "BMW" || marca === "Porche"){
      url = this.http.get<Product[]>('api/searchBrands?brands='+marca);
    }else if(marca === "Kia,BMW" || marca === "Kia,Porche"  || marca === "BMW,Porche"){

      url = this.http.get<Product[]>('api/searchBrands?brands='+marca);
    }
    return url;
  }

  getFilterByPrice(minprince: number, maxprice:number){

    return this.http.get<Product[]>('/api/search?initialPrice='+minprince+'&finalPrice='+maxprice);
  }


}


