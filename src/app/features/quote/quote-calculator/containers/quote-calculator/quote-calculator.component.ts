import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteCalculatorService } from './quote-calculator.service';
import { QuoteDto } from 'src/app/api/models';
import { Observable } from 'rxjs/internal/Observable';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'dmiw-quote-calculator',
  templateUrl: './quote-calculator.component.html',
  styleUrls: ['./quote-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteCalculatorComponent implements OnInit {
  quote: Observable<QuoteDto>;
  constructor(
    private route: ActivatedRoute,
    private quoteCalculatorService: QuoteCalculatorService,
    private fb: FormBuilder) {
    this.quote = quoteCalculatorService.quote;
  }

  quoteForm = this.createQuoteFormGroup(this.fb);
  term = 0;
  amount = 0;
  ngOnInit() {
    const quoteId = this.route.snapshot.queryParamMap.get('id');
    if (quoteId) {
      this.quoteCalculatorService.loadQuote(quoteId).then((q) => {
        this.quoteForm.patchValue(this.toQuoteForm(q), { emitEvent: false });
        this.amount = q.amount;
        this.term = q.term;
      });
    }
  }

  onAmountChange(event: any) {
    // this.quote.subscribe(q => {
    //   q.amount = event;
    //   // this.quoteForm.get('amount').setValue(event);
    //   this.quoteCalculatorService.updateQuote({...q});
    // });
  }

  onTermChange(event: any) {
    // this.quote.subscribe(q => {
    //   q.term = event;
    //   // this.quoteForm.get('term').setValue(event);
    //   this.quoteCalculatorService.updateQuote({...q});
    // });
  }

  toQuoteForm(quote: QuoteDto) {
    return {
      title: quote.title,
      firstName: quote.firstName,
      lastName: quote.lastName,
      amount: quote.amount,
      term: quote.term,
      email: quote.email,
      mobile: quote.mobile
    };
  }

  createQuoteFormGroup(fb: FormBuilder) {
    return fb.group({
      title: '',
      firstName: '',
      lastName: '',
      amount: 0,
      term: 0,
      email: '',
      mobile: ''
    });
  }

  get titles(): Array<string> {
    return ['Mr.', 'Ms.', 'Mrs.', 'Doctor'];
  }
}
