import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'test server',
      content: 'some contetn',
    },
  ];

  count = [1];

  onServerAdded({
    newServerName,
    newServerContent,
  }: {
    newServerName: string;
    newServerContent: string;
  }) {
    this.serverElements.push({
      type: 'server',
      name: newServerName,
      content: newServerContent,
    });
  }

  onBlueprintAdded({
    newServerName,
    newServerContent,
  }: {
    newServerName: string;
    newServerContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: newServerName,
      content: newServerContent,
    });
  }

  onGameStart(newCount: number) {
    this.count.push(newCount);
  }
}
