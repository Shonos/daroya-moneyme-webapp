import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    loadChildren: () =>
    import('./quote-calculator/containers/quote-calculator/quote-calculator.module').then(m => m.QuoteCalculatorModule)
  },
  {
    path: 'applyquote',
    loadChildren: () =>
    import('./apply-quote/containers/apply-quote.module').then(m => m.ApplyQuoteModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
