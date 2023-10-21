import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  imgParent='';
  title: any;

  onLoaded(img: string){
    console.log('log padre', img)
  }
}

//const prueba = new AppComponent();
//prueba.getInfoMarca("BMW");
//prueba.getInfoPrecio(187900000, 800000000);
//console.log(prueba.products)


