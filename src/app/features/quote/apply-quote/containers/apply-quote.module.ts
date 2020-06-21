import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ApplyQuoteComponent } from './apply-quote.component';
import { QuoteCalculatorService } from '../../quote-calculator/containers/quote-calculator/quote-calculator.service';

const routes: Routes = [
  {
    path: '',
    component: ApplyQuoteComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ApplyQuoteComponent,
  ],
  providers: [QuoteCalculatorService]
})
export class ApplyQuoteModule { }
