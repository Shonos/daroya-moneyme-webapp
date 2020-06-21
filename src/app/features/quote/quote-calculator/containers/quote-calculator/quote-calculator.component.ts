import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private fb: FormBuilder,
    private router: Router) {
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
    this.amount = event;
  }

  onTermChange(event: any) {
    this.term = event;
  }

  saveQuote() {
    this.formToQuote().then(()=> {
      this.quoteCalculatorService.saveQuote().then(s => {
        // route to new page
        this.router.navigate(['/quote/applyquote'], { queryParamsHandling: 'preserve' });
      }).catch(
        // alert
      );
    });
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

  formToQuote(): Promise<QuoteDto> {
    // theres probably a better way to do this
    return new Promise<QuoteDto>((resolve) => {
      this.quoteCalculatorService.getQuoteAsync().then(q => {
        q.title = this.quoteForm.get('title').value;
        q.firstName = this.quoteForm.get('firstName').value;
        q.lastName = this.quoteForm.get('lastName').value;
        q.amount = this.amount;
        q.term = this.term;
        q.email = this.quoteForm.get('email').value;
        q.mobile = this.quoteForm.get('mobile').value;
        this.quoteCalculatorService.updateQuote(q);
        resolve();
      });
    });
  }

  get titles(): Array<string> {
    return ['Mr.', 'Ms.', 'Mrs.', 'Doctor'];
  }
}
