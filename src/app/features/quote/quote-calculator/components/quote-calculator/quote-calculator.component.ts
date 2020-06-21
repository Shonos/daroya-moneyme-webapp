import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dmiw-quote-calculator',
  templateUrl: './quote-calculator.component.html',
  styleUrls: ['./quote-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteCalculatorComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
}
