import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Input() count: number[];
  @Output() handleGameStart = new EventEmitter();

  timer: ReturnType<typeof setInterval>;

  onStartGame() {
    this.timer = setInterval(() => {
      this.handleGameStart.emit(this.count[this.count.length - 1] + 1);
      console.log("this.count >>", this.count);
    }, 1000);
  }

  onStopGame() {
    clearTimeout(this.timer);
    this.count = [0];
  }
}
