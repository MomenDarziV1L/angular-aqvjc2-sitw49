import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alters',
  templateUrl: './product-alters.component.html',
  styleUrls: ['./product-alters.component.css'],
})
export class ProductAltersComponent {
  @Input() product!: Product | undefined;

  @Output() notify = new EventEmitter();
  // constructor() { }

  /* ngOnInit() {
  } */
}
