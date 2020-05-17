import { GallerySliderService } from "./../../../../core/services/gallery-slider.service";
import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-gallery-slider",
  templateUrl: "./gallery-slider.component.html",
  styleUrls: ["./gallery-slider.component.css"],
})
//TODO improve this component
export class GallerySliderComponent implements OnInit, OnChanges {
  @Input() images: any[];
  @Input() mainImage: any;
  slideIndex: number;
  constructor(private galleryService: GallerySliderService) {}
  ngOnInit(): void {
    // this.loadImages();
    this.slideIndex = 0;
  }
  ngOnChanges(): void {}
  loadImages(): void {
    this.images;
  }
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }
  // showSlides(slideIndex);
  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName(
      "img-slides"
    ) as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("images") as HTMLCollectionOf<
      HTMLElement
    >;
    const mainImage = document.getElementById("mainImage");
    if (n > this.images.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.images.length;
    }
    for (i = 0; i < this.images.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += " active";
    }
    mainImage.style.display = "none";
  }
}
