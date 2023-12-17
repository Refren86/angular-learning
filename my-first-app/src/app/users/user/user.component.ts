import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Not recommended!!!
    // this.user = {
    //   // id: Number(this.route.snapshot.paramMap.get('userId')),
    //   // name: this.route.snapshot.paramMap.get('userName'),
    //   id: Number(this.route.snapshot.params['userId']),
    //   name: this.route.snapshot.params['userName'],
    // };

    // Recommended!!!
    // observable params
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: Number(params['userId']),
        name: params['userName'],
      };
    });
  }

  // This Angular does by default with params subscriptions!
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
