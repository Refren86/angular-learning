import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  // encapsulation: ViewEncapsulation.None // makes styles in css global (disables encapsulation)
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // makes property bindable from outside (to pass data from parent component)
  // srvElement is an alias
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true })
  contentParagraph: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  // HOOKS:
  // ngOnChanges is called whenever Angular sets or resets data-bound @Input properties.
  // This method receives a SimpleChanges object containing current and previous property values.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!', changes);
  }

  // ngOnInit is called once, after the ngOnChanges has been called for the first time and after the component's data-bound properties have been initialized.
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log(
      'Header el (ngOnInit) ->',
      this.header.nativeElement.textContent
    );
  }

  // ngDoCheck is called during every change detection run, immediately after ngOnChanges() and ngOnInit().
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  // ngAfterContentInit is called once after the ng-content has been projected into the component.
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  // ngAfterContentChecked is called after Angular checks the content projected into the component.
  // This method is called after the ngAfterContentInit() and every subsequent ngDoCheck().
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  // ngAfterViewInit is called once after the component's views and child views are initialized (rendered).
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log(
      'Header el (ngOnInit) ->',
      this.header.nativeElement.textContent
    );
  }

  // ngAfterViewChecked is called after Angular checks the component's views and child views.
  // This method is called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  // ngOnDestroy is called just before the directive/component is destroyed.
  // This is a good place to cleanup any subscriptions or detach event handlers to avoid memory leaks.
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
