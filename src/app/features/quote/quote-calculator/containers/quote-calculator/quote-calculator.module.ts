import { NgModule } from '@angular/core';
import { QuoteCalculatorComponent } from './quote-calculator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { QuoteCalculatorService } from './quote-calculator.service';
import { CalculatorSliderComponent } from '../../components/calculator-slider/calculator-slider.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteCalculatorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    QuoteCalculatorComponent,
    CalculatorSliderComponent
  ],
  providers: [QuoteCalculatorService]
})
export class QuoteCalculatorModule { }
