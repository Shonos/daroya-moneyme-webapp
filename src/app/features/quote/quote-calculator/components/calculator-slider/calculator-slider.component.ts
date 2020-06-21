import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'dmiw-calculator-slider',
  templateUrl: './calculator-slider.component.html',
  styleUrls: ['./calculator-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorSliderComponent implements OnInit {
  @Input() amount: number;
  @Input() min: number;
  @Input() max: number;
  ngOnInit(): void {

  }
  onInputChange(event: any) {
    console.log(event.value);
  }
}
