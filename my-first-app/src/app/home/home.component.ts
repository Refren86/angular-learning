import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private timerSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.timerSubscription = interval(1500).subscribe((count) => console.log(count));

    // Custom observable
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        // other methods: error, complete
        observer.next(count); // this will emit new value to listener (observer)
        count++;
      }, 1000);
    });

    this.timerSubscription = customIntervalObservable.subscribe((count) =>
      console.log(count)
    );
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
