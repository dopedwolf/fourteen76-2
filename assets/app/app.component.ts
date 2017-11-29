import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component ({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  constructor(
  private router: Router,
) {
  router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      document.querySelector('.mat-sidenav-content').scrollTop = 0;
    }
  }
}
