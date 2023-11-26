import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // our own html tag
  // selector: '[app-servers]', // can be selected by attribute
  // selector: '.app-servers', // can be selected by class
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  isServerCreated = false;
  serverName = 'Test server';
  servers = ["test-server", 'test-server2'];
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName)
    this.isServerCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

  isUsernameEmpty() {
    return !this.username || this.username.trim().length === 0;
  }
}
