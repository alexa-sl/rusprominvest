import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ISlide} from "../../types/ISlide";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image.slider.component.html',
  styleUrls: ['./image.slider.component.sass']
})

export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() slides: ISlide[] = []

  currentIndex: number = 0;
  timeoutID?: number;

  ngOnInit() {
    this.resetTimer();
  };

  goToPrevious() {
    const isFirst = this.currentIndex === 0;
    const prevIndex = isFirst ? this.slides.length -1 : this.currentIndex - 1;

    this.goToSlide(prevIndex);
  };

  goToNext() {
    const isLast = this.currentIndex === this.slides.length -1;
    const nextIndex = isLast ? 0  : this.currentIndex + 1;

    this.goToSlide(nextIndex);
  };

  goToSlide(slideIndex: number) {
    this.currentIndex = slideIndex;
  };

  getCurrentSlideUrl (): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutID);
  };

  resetTimer() {
    if (this.timeoutID) {
      window.clearTimeout(this.timeoutID);
    }

    window.setTimeout(() => this.goToNext(), 3000);
  }
}
