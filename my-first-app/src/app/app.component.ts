import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // our own html tag
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [
    `
      .whiteColor {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  // variables which go to the html template (data binding)
  btnClickCounter = [];
  isParagraphVisible = false;

  onDisplayDetailsBtnClick() {
    this.isParagraphVisible = !this.isParagraphVisible;
    this.btnClickCounter.push(this.btnClickCounter.length + 1);
  }
}
