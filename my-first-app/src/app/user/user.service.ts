import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  activatedSubject = new Subject<boolean>(); // RECOMMENDED for cross-components services which I need to subscribe to and similar to EventEmitter!
}
