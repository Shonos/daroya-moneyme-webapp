import { NgModule } from '@angular/core';
import { QuoteCalculatorComponent } from './quote-calculator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

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
    QuoteCalculatorComponent
  ]
})
export class QuoteCalculatorModule { }
