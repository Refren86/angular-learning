import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // 1)
    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(Number(id));

    // 2)
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(Number(params.id));
    // });

    // 3)
    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    })
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
