import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errorMessage = this.activeRoute.snapshot.data?.message ?? "";

    this.activeRoute.data.subscribe((data: Data) => {
      this.errorMessage = data.message;
    });
  }
}
