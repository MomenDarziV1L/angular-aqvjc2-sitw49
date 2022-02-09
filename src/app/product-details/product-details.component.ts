import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your products has been added to the cart');
  }

  ngOnInit() {
    //First geet he product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFormRoute = Number(routeParams.get('productId'));

    //Find the product that correspond with the id provide in rute.
    this.product = products.find(
      (product) => product.id === productIdFormRoute
    );
  }
}
