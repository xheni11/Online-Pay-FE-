import { ColorModel } from "../../../core/models/responses/color.model";
import { ProductSizeModel } from "../../../core/models/responses/product-size.model";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";
import { SelectItem } from "primeng";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ProductModel } from "src/app/core/models/responses/product.model";
import { ProductOrderModel } from "src/app/core/models/requests/product-order.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() product: ProductModel;
  @Input() images: any[];
  @Input() mainImage: any;
  @Output() onBuy: EventEmitter<ProductOrderModel> = new EventEmitter<
    ProductOrderModel
  >();
  productForm: FormGroup;
  sizes: SelectItem[];
  colors: SelectItem[];
  quantities: SelectItem[];
  isWishButtonClicked: boolean;
  selectedFiles: FileList;
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(): void {
    this.productForm = this.formBuilder.group({
      name: new FormControl(this.product ? this.product.name : "", []),
      price: new FormControl(
        this.product ? this.product.price + " EUR" : "", //TODO add currency
        []
      ),
      selectedSize: new FormControl(null, [Validators.required]),
      selectedQuantity: new FormControl(1, [Validators.required]),
      selectedColor: new FormControl(null, [Validators.required]),
    });

    this.fillSizes();
    if (this.product) {
      this.colors = [
        ...this.product.colors.map((item: ColorModel) => {
          return {
            id: item.id,
            label: item.name,
            value: { ...item },
          };
        }),
      ];
    }
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
      ...size.colors.map((color: ColorModel) => {
        return {
          id: color.id,
          label: color.name,
          value: { ...color },
        };
      }),
    ];
  }

  fillSizes() {
    if (this.product) {
      this.sizes = [
        ...this.product.sizes.map((item: ProductSizeModel) => {
          return {
            id: item.id,
            label: item.value,
            value: { ...item },
          };
        }),
      ];
    }
  }
  onColorClick() {
    let colorId = this.productForm.value.selectedColor.id;
    let color = this.product.colors.find((color) => color.id == colorId);
    this.sizes = [
      ...color.sizes.map((size: ProductSizeModel) => {
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
      const form = { ...this.productForm.value, id: this.product.id };
      this.onBuy.emit(form);
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
