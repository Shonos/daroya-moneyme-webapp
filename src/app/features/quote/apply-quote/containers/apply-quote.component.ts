import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteDto } from 'src/app/api/models';
import { Observable } from 'rxjs/internal/Observable';
import { QuoteCalculatorService } from '../../quote-calculator/containers/quote-calculator/quote-calculator.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dmiw-apply-quote',
  templateUrl: './apply-quote.component.html',
  styleUrls: ['./apply-quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplyQuoteComponent implements OnInit {
  quote: Observable<QuoteDto>;
  repayments: Observable<number>;
  constructor(
    private route: ActivatedRoute,
    private quoteCalculatorService: QuoteCalculatorService) {
    this.quote = quoteCalculatorService.quote;
    this.repayments = this.quote.pipe(map(c => {
      if (c) {
        return Math.round(300 + (c.amount * 1.123));
      } else {
        return 0;
      }
    }));
  }
  ngOnInit() {
    const quoteId = this.route.snapshot.queryParamMap.get('id');
    if (quoteId) {
      this.quoteCalculatorService.loadQuote(quoteId).then((q) => {

      });
    }
  }

  applyQuote() {
    this.quoteCalculatorService.getQuoteAsync().then(s => {
      s.establishmentFee = 300;
      s.repayments = Math.round(300 + (s.amount * 1.123));
      s.totalInterest = 1.123;
      this.quoteCalculatorService.updateQuote(s);
      this.quoteCalculatorService.saveQuote().then(() => {
        alert('Succesful application.');
      });
    });
  }
}
