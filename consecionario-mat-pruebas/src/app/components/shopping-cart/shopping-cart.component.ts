import { Component , OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  @Input() productCart: Product = {

    image: '',
    name: '',
    price: 0,
    describe: '',
    marca: ''
  }

  productosEnCarrito = [
    { nombre: 'Producto 1', precio: 10 },
    // ... otros productos
  ];

  get total() {
    return this.productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
  }

}
