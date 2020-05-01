import { Color } from "../../../core/models/responses/color.model";
import { ProductSize } from "../../../core/models/responses/product-size.model";
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { SelectItem } from "primeng";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Product } from "src/app/core/models/responses/product.model";
import { ProductOrder } from "src/app/core/models/requests/product-order.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit,OnChanges {
  @Input() product: Product;
  @Output() onBuy: EventEmitter<ProductOrder> = new EventEmitter<
    ProductOrder
  >();
  productForm: FormGroup;
  images: any[];
  sizes: SelectItem[];
  colors: SelectItem[];
  quantities: SelectItem[];
  isWishButtonClicked: boolean;
  constructor(private formBuilder: FormBuilder) {}
  ngOnChanges(): void {
    this.productForm = this.formBuilder.group({
      name: new FormControl(this.product?this.product.name:"", []),
      price: new FormControl(this.product?this.product.price:'', []),
      selectedSize: new FormControl(null, [Validators.required]),
      selectedQuantity: new FormControl(1, [Validators.required]),
      selectedColor: new FormControl(null, [Validators.required]),
    });

    this.fillSizes();
    if(this.product){
    this.colors = [
      ...this.product.colors.map((item: Color) => {
        return {
          id: item.id,
          label: item.name,
          value: { ...item },
        };
      }),
    ];}
    this.images = [];

    this.images.push({
      source: "../../../../../assets/images/heart.png",
      alt: "Description for Image 9",
      title: "Title 9",
    });
    this.images.push({
      source: "../../../../../assets/images/heart.jpg",
      alt: "Description for Image 10",
      title: "Title 10",
    });
    this.images.push({
      source: "../../../../../assets/images/heart.jpg",
      alt: "Description for Image 11",
      title: "Title 11",
    });
    this.images.push({
      source: "../../../../../assets/images/heart.jpg",
      alt: "Description for Image 12",
      title: "Title 12",
    });
  }

  ngOnInit() {
    this.isWishButtonClicked = false;

  }
  get sizeControl() {
    return this.productForm.get("selectedSize") as FormControl;
  }
  get colorControl() {
    return this.productForm.get("selectedColor") as FormControl;
  }
  onAddToWish() {
    this.isWishButtonClicked
      ? (this.isWishButtonClicked = false)
      : (this.isWishButtonClicked = true);
  }
  onSizeClick() {
    let sizeId = this.productForm.value.selectedSize.id;
    let size = this.product.sizes.find((size) => size.id == sizeId);
    this.colors = [
      ...size.colors.map((color: Color) => {
        return {
          id: color.id,
          label: color.name,
          value: { ...color },
        };
      }),
    ];
  }

  fillSizes() {
    if(this.product){
    this.sizes = [
      ...this.product.sizes.map((item: ProductSize) => {
        return {
          id: item.id,
          label: item.value,
          value: { ...item },
        };
      }),
    ];}
  }
  onColorClick() {
    let colorId = this.productForm.value.selectedColor.id;
    let color = this.product.colors.find((color) => color.id == colorId);
    this.sizes = [
      ...color.sizes.map((size: ProductSize) => {
        return {
          id: size.id,
          label: size.value,
          value: { ...size },
        };
      }),
    ];
  }
  buy() {
    if (this.productForm.valid) {
      const form = { ...this.productForm.value,id:this.product.id };
      this.onBuy.emit(form);
    }
  }
}
