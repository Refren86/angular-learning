import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';

// https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656360#content

interface IServer {
  id: number;
  name: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class ServerResolver implements Resolve<IServer> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IServer> | Promise<IServer> | IServer {
    return this.serversService.getServer(+route.params.id);
  }
}
