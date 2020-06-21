import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dmiw-calculator-slider',
  templateUrl: './calculator-slider.component.html',
  styleUrls: ['./calculator-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorSliderComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() currency: string;
  @Input() label = '';
  @Output() sliderChanged = new EventEmitter<number>();
  @Input() amount: number ;

  ngOnInit(): void {

  }

  formatLabel(value: number) {
    return `${value}`;
  }

  onSliderChange($event) {
    this.sliderChanged.emit($event.value);
  }
}
