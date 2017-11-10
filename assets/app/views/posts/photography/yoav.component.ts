import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component ({
  selector: 'app-yoav',
  templateUrl: './templates/yoav.component.html'
})

export class Yoav implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  postTitle = "Yoav Pelli";
  postSubtitle = "Photo Story";

 constructor(private titleService: Title) { }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/yoav/one.jpg',
      '/images/photography/yoav/two.jpg',
      '/images/photography/yoav/three.jpg',
      '/images/photography/yoav/four.jpg',
      '/images/photography/yoav/five.jpg',
      '/images/photography/yoav/six.jpg',
      '/images/photography/yoav/seven.jpg',
      '/images/photography/yoav/eight.jpg',
      '/images/photography/yoav/nine.jpg'
    ]
  }
}
