import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  product = {

    image:'./assets/Images//BMW/cosySec(2).jpg',
    name: 'BMW i3s Atelier',
    price: 187900000,
    describe: 'Motor electrico'

  }

}
