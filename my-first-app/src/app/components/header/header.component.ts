import { Component, EventEmitter, Output } from '@angular/core';

import { TNavLink } from '../../types/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() handleNavigation = new EventEmitter<TNavLink>() 

  collapsed = true;

  onNavigate(endpoint: TNavLink) {
    this.handleNavigation.emit(endpoint)
  }
}
