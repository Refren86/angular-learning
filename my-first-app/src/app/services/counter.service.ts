import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  setToInactiveCount = 0;
  setToActiveCount = 0;

  incrementInactiveCount() {
    this.setToInactiveCount = this.setToInactiveCount + 1;
    console.log(this.setToInactiveCount);
    
  }

  incrementActiveCount() {
    this.setToActiveCount = this.setToActiveCount + 1;
    console.log(this.setToActiveCount);
    
  }
}
