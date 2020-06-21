import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteCalculatorService } from './quote-calculator.service';
import { QuoteDto } from 'src/app/api/models';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'dmiw-quote-calculator',
  templateUrl: './quote-calculator.component.html',
  styleUrls: ['./quote-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteCalculatorComponent implements OnInit {
  quote: Observable<QuoteDto>;
  constructor(private route: ActivatedRoute, private quoteCalculatorService: QuoteCalculatorService) {
    this.quote = quoteCalculatorService.quote;
  }
  ngOnInit() {
    const quoteId = this.route.snapshot.queryParamMap.get('id');
    if (quoteId) {
      this.quoteCalculatorService.loadQuote(quoteId);
    }
  }
}
