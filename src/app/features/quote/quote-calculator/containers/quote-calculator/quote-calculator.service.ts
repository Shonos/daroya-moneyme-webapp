import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { QuoteDto } from 'src/app/api/models';
import { QuoteService } from 'src/app/api/services/quote.service';

@Injectable()
export class QuoteCalculatorService {
  public quoteBehaviorSubject: BehaviorSubject<QuoteDto>;
  public quote: Observable<QuoteDto>;

  constructor(private quoteService: QuoteService) {
    this.quoteBehaviorSubject = new BehaviorSubject<QuoteDto>(null);
    this.quote = this.quoteBehaviorSubject.asObservable();
  }

  loadQuote(quoteId: string) {
    return new Promise<QuoteDto>((resolve, reject) => {
      this.quoteBehaviorSubject.next(null);
      return this.quoteService.apiQuoteGetQuoteGet$Json({ quoteId }).subscribe(
        r => {
          if (r.isSuccess) {
            this.quoteBehaviorSubject.next(r.quote);
            resolve(this.quoteBehaviorSubject.value);
          }
        }
      );
    });
  }

  updateQuote(quote: QuoteDto) {
    this.quoteBehaviorSubject.next(quote);
  }
}
