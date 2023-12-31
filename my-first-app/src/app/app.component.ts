import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated: boolean = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedSubject.subscribe(
      (activated) => {
        this.isActivated = activated;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
