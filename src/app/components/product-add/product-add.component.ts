import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService) {

  }
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
  })
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log(data)
      })
    }
  }
}
