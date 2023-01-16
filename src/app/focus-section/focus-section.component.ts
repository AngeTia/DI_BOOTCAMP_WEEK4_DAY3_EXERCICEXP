import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-focus-section',
  templateUrl: './focus-section.component.html',
  styleUrls: ['./focus-section.component.css']
})
export class FocusSectionComponent implements OnInit {
  private focus$!: Observable<Event>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.focus$ = fromEvent(
      this.elementRef.nativeElement.querySelector('.focus-section'),
      'focus'
    );
  }
}
