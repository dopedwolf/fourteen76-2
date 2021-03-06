import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-crackers',
  templateUrl: './templates/photography.component.html'
})

export class CrackerPackers implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `The iconic Carr's of Carlisle factory has been synonymous with the city for nearly two hundred years. Home to the famous Carr's Table Water Biscuit as well as other British classics, Custard Creams, Bourbons, Ginger Nuts and many others under the McVitie's, Jacobs', Crawford's and Carr's brands.`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `The iconic Carr's of Carlisle factory has been synonymous with the city for nearly two hundred years. Home to the famous Carr's Table Water Biscuit as well as other British classics, Custard Creams, Bourbons, Ginger Nuts and many others under the McVitie's, Jacobs', Crawford's and Carr's brands.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'crackerpackers.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `The iconic Carr's of Carlisle factory has been synonymous with the city for nearly two hundred years. Home to the famous Carr's Table Water Biscuit as well as other British classics, Custard Creams, Bourbons, Ginger Nuts and many others under the McVitie's, Jacobs', Crawford's and Carr's brands.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'crackerpackers.jpg'}
    ])
  }

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
  isphotoDescription: boolean = true;
  issocial: boolean = true;

  postTitle = "Cracker Packers";
  postSubtitle = "Matthew MacPake";

  description = [
    "The iconic Carr's of Carlisle factory has been synonymous with the city for nearly two hundred years. Home to the famous Carr's Table Water Biscuit as well as other British classics, Custard Creams, Bourbons, Ginger Nuts and many others under the McVitie's, Jacobs', Crawford's and Carr's brands.",
    "On Friday 7th January 2005 heavy rainfall left Cumbria devastated by floods. Ten years later, in December 2015, history repeated itself when storm Desmond reeked widespread havoc across Cumbria, Lancashire & Yorkshire.",
    "For a second time damage across the county was devastating. Carr's Biscuit factory was overwhelmed by the floodwaters (one estimate suggested that up to 10 million gallons of water flooded into the premises) and production lines were halted. The impact of the factory closure was felt across the country, and a national biscuit shortage was headline news. After months of painstaking cleaning and rebuilding, production begin again in April 2016 - not a moment too soon, as the nation demanded their much loved tea break treats.",
    "Over the generations, workers at the factory have been affectionately nicknamed 'Cracker Packers'. This project celebrates those hardworking ladies and gentlemen, and re-opening of the factory, which in itself represents the resilience of City of Carlisle as it recovers once again."
  ]


 socials = [
   {
     description: 'mattmackpake.co.uk',
     url: 'http://www.mattmacpake.co.uk/',
     img: '/images/icons/website.png'
   },
   {
     description: 'mattmackpake',
     url: 'https://www.instagram.com/mattmacpake/',
     img: '/images/icons/insta.png'
   }
 ]

 pageUrl: string = 'CrackerPackers';
 shareTitle: string = 'Cracker%20Packers';
 shareFacebook = global.faceShare + this.pageUrl;
 shareTwitter = "";
 hastags = "photostory, photography, photographer";
 shareEmail = "";
 shareGoogle = global.googleShare + this.pageUrl;
 shareReddit = "";


  ngOnInit () {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/crackerpackers/one.jpg',
      '/images/photography/crackerpackers/two.jpg',
      '/images/photography/crackerpackers/three.jpg',
      '/images/photography/crackerpackers/four.jpg',
      '/images/photography/crackerpackers/five.jpg',
      '/images/photography/crackerpackers/seven.jpg',
      '/images/photography/crackerpackers/eight.jpg',
      '/images/photography/crackerpackers/nine.jpg',
      '/images/photography/crackerpackers/ten.jpg',
      '/images/photography/crackerpackers/eleven.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }
}
