import { Component } from '@angular/core';

import { TNavLink } from '../../types/common';

@Component({
  selector: 'app-root', // our own html tag
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentEndpoint: TNavLink = "recipes";

  // variables which go to the html template (data binding)
  onNavbarNavigation(endpoint: TNavLink) {
    this.currentEndpoint = endpoint;
  }
}
