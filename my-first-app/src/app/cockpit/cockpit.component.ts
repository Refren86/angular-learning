import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    newServerName: string;
    newServerContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    newServerName: string;
    newServerContent: string;
  }>();

  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  // newServerName = '';
  // newServerContent = '';

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      newServerName: nameInput.value, // this is passed as local reference in html
      newServerContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      newServerName: nameInput.value, // this is passed as local reference in html
      newServerContent: this.serverContentInput.nativeElement.value,
    });
  }
}
