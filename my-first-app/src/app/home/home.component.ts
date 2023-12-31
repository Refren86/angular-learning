import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable, Observer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
    const customIntervalObservable: Observable<number> = new Observable(
      (observer) => {
        let count = 0;
        setInterval(() => {
          if (count === 5) {
            observer.complete(); // this will stop observable like res.end()
          }

          if (count > 3) {
            observer.error(new Error('count is greater than 3'));
          }

          // other methods: error, complete
          observer.next(count); // this will emit new value to listener (observer)

          count++;
        }, 1000);
      }
    );

    this.timerSubscription = customIntervalObservable
      .pipe(
        // this is operators examples (they work similar to middlewares)
        filter((count) => {
          return (count + 1) % 2 === 0;
        }),
        map((count) => {
          return `Round: ${count + 1}`;
        })
      )
      .subscribe(
        (count) => {
          // this is like resolve and triggers on every emitted value
          console.log(count);
        },
        (error: Error) => {
          // this is like catch and triggers in case of error
          alert(error.message);
        },
        () => {
          // this triggers when subscription is completed
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
