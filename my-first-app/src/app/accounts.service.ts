import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

// NB! Another way of using global services would be:
// @Injectable({providedIn: 'root'}) https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/5401644#content

// tells angular that other services can be injected inside here (receiving service)
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>()

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
