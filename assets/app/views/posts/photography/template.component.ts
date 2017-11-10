import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-slider',
  templateUrl: './templates/template.component.html'
})

export class SliderTemplate implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      loop: true,
      spaceBetween: 10
  };

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.images = [
      '/images/photography/joust/one.jpg',
      '/images/photography/joust/two.jpg',
      '/images/photography/joust/three.jpg',
      '/images/photography/joust/four.jpg',
      '/images/photography/joust/five.jpg',
      '/images/photography/joust/six.jpg',
      '/images/photography/joust/seven.jpg',
      '/images/photography/joust/eight.jpg',
      '/images/photography/joust/nine.jpg',
      '/images/photography/joust/ten.jpg',
      '/images/photography/joust/eleven.jpg',
      '/images/photography/joust/twelve.jpg',
      '/images/photography/joust/thirteen.jpg',
      '/images/photography/joust/fourteen.jpg',
      '/images/photography/joust/fifteen.jpg',
      '/images/photography/joust/sixteen.jpg'
    ]
  }
}