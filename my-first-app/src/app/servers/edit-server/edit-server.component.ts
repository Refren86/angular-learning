import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    this.route.params.subscribe((params: Params) => {
      const server = this.serversService.getServer(+params.id);

      this.server = server;
      this.serverName = server.name;
      this.serverStatus = server.status;
    });

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = +queryParams.allowEdit === 1;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
