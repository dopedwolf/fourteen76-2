import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-skate',
  templateUrl: './templates/photography.component.html'
})

export class SkateFund implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = true;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = "Skate Park Fundraiser";
  postSubtitle = "Mateo Montoya";


  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Photo Story`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Photo Story`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'skate.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Photo Story`},
      {name: 'twitter:image', content: global.shareImgUrl + 'skate.jpg'}
    ])
  }

  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/skatefund/one.jpg',
      '/images/photography/skatefund/three.jpg',
      '/images/photography/skatefund/four.jpg',
      '/images/photography/skatefund/five.jpg',
      '/images/photography/skatefund/six.jpg',
      '/images/photography/skatefund/seven.jpg',
      '/images/photography/skatefund/eight.jpg',
      '/images/photography/skatefund/nine.jpg',
      '/images/photography/skatefund/ten.jpg',
      '/images/photography/skatefund/eleven.jpg',
      '/images/photography/skatefund/twelve.jpg',
      '/images/photography/skatefund/thirteen.jpg',
      '/images/photography/skatefund/fourteen.jpg',
      '/images/photography/skatefund/fifteen.jpg',
      '/images/photography/skatefund/sixteen.jpg',
      '/images/photography/skatefund/seventeen.jpg',
      '/images/photography/skatefund/eighteen.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  pageUrl: string = 'SkateParkFundraiser';
  shareTitle: string = 'Skate%20Park%20Fundraiser';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "photostory";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";

}
